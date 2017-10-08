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

export default {
    getParks,
    getParkInfrastructure
}
