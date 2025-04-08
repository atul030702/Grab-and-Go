async function listOfRestaurantsJS() {

    const response = await fetch("/api/getRestaurant");
    const jsonData = await response.json();
    return jsonData.data;
}

export default listOfRestaurantsJS;