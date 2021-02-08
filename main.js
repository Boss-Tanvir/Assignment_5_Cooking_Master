fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
.then(res => res.json())
.then(data => food(data.meals));


let food = foodDetails => {
    // console.log(foodDetails);
    const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputCity = document.getElementById('city').value;
    getWeatherData(inputCity)
})
}


