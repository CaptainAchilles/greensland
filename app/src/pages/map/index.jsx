import React from "react";

import ParkVR from "../vr/parkVr";
import MarkerMap from "./markerMap"
import ParkCollection from "./parkCollection";

import { ParkService } from "../../services";

export default class MapManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parks: [],
            availableFilters: {},
            activeFilters: [],
            visibleParks: [],
            selectedMarker: undefined
        };
    }

    componentDidMount() {
        ParkService.getParks()
            .then(parks => this.setState({ parks }));
        ParkService.getParkInfrastructure()
            .then(availableFilters => {
                // Turn into blazingly fast lookup table
                for(let keyName in availableFilters) {
                    // Self mutate for speed!
                    availableFilters[keyName] = availableFilters[keyName].reduce((carry, parkId) => {
                        carry[parkId] = true;
                        return carry;
                    }, {});
                }

                this.setState({ availableFilters })
            });
    
    };

    /**
     * @param newFilter string
     */
    updateParkFilter = newFilter => {
        const filterIndex = this.state.activeFilters.indexOf(newFilter);
        const activeFilters = this.state.activeFilters;

        if (filterIndex == -1) {
            activeFilters.push(newFilter);
        } else {
            activeFilters.splice(filterIndex, 1);
        }

        // Recompute cached visible parks
        let visibleParks = this.state.parks.slice();
        if (activeFilters.length > 0) {
            // Keep all parks which are _IN_ filter
            // Mutate the visibleParks array
            activeFilters.forEach(filter => {
                visibleParks = visibleParks.filter(park => this.state.availableFilters[filter][park.id] === true)
            });
        }
        this.setState({ activeFilters, visibleParks });
    };

    showOverlay = overlayData => {
        this.setState({
            selectedMarker: overlayData
        });
    };

    hideOverlay = () => {
        this.setState({
            selectedMarker: undefined
        });
    };

    render() {
        const showParks = this.state.activeFilters.length > 0 ? this.state.visibleParks : this.state.parks;
        return <div>
            <MarkerMap markerClick={this.showOverlay} parks={showParks}></MarkerMap>
            <ParkCollection parkTypes={Object.keys(this.state.availableFilters)} defaultSelected={this.state.activeFilters} onChange={this.updateParkFilter}></ParkCollection>
            {this.state.selectedMarker && <ParkVR {...this.state.selectedMarker} onClick={this.hideOverlay}></ParkVR>}
        </div>
    }
}
