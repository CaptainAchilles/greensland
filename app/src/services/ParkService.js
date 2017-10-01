const getParks = () => fetch("//localhost:3000/parks")
    .then(response => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    });

export default {
    getParks
}
