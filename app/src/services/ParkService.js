const getParks = () => fetch("//localhost:3000/parks")
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });
const getParkInfrastructure = () => fetch("//localhost:3000/parkItems/types")
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });

const getForPark = id => fetch("//localhost:3000/parkItems/park/" + id)
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });

const getRandomParkInfrastructure = () => fetch("//localhost:3000/parkItems/random")
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });

export default {
    getParks,
    getForPark,
    getParkInfrastructure,
    getRandomParkInfrastructure
}
