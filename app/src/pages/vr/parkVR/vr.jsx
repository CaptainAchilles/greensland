import { Entity, Scene, Asset } from "aframe-react";
import { createAFrameModel, getAssets } from "../../../util";
import React from "react";

const DIMENSION_SCALE = 100000;
const GRASS_TEXTURE_DIMENSION = 256;

export default props => {
    const parkItems = props.parkItems.map(x => ({...x}));
    if (parkItems.length === 0) {
        return <p></p>;
    }

    parkItems.forEach(x => {
        x.lat = Math.abs(x.lat);
        x.lng = Math.abs(x.lng);
    });

    const lats = parkItems.map(x => x.lat);
    const lngs = parkItems.map(x => x.lng);
    
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);

    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    
    const width = (maxLat - minLat) * DIMENSION_SCALE;
    const height = (maxLng - minLng) * DIMENSION_SCALE;

    const cameraPosition = `${width / 2} 0 ${height / 2}`;

    const cameraControlSettings = `acceleration: ${100}`;
    const camera = <a-camera wasd-controls={cameraControlSettings} position={cameraPosition}></a-camera>;

    
    const xGroundScale = (width / GRASS_TEXTURE_DIMENSION) * 200;
    const yGroundScale = (height / GRASS_TEXTURE_DIMENSION) * 200;

    const planePosition = `${width / 2} 0 ${height / 2}`;
    const plane = <a-plane id="plane" position={planePosition} rotation="-90 0 0" material={`src:#grass-ground; repeat: ${xGroundScale} ${yGroundScale}`} width={width} height={height}></a-plane>;

    const translatedParkItems = parkItems.map(item => {
        const latTrans = (item.lat - minLat) * DIMENSION_SCALE;
        const lngTrans = (item.lng - minLng) * DIMENSION_SCALE;
        return {
            ...item,
            position: `${latTrans} 0 ${lngTrans}`,
            type: item.type
        };
    });
    const scene = <Scene>
            <a-assets>
                { getAssets() }
                <img id="grass-ground" src="../assets/images/ground.jpg" />
                <img id="sky" src="../assets/images/sky.jpg" />
            </a-assets>
            { camera }
            { plane }
            { translatedParkItems.map(parkItem => createAFrameModel(parkItem)) }
            <a-sky src="#sky"></a-sky>            
        </Scene>

    return scene;
};
