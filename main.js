// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then(res => res.json())
// .then(data => food(data.meals));


// let food = foodDetails => {
//     // console.log(foodDetails);
//     const searchBtn = document.getElementById('search_button');
// searchBtn.addEventListener('click', () => {
//     const inputCity = document.getElementById('city').value;
//     getWeatherData(inputCity)
// })
// }


let clickBtn = () => {
    let input = document.getElementById('search_input').value
   
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    // url.innerHTML = ''
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data.meals));

    let foodDetails = (foods) =>{
        let foodList = document.getElementById('food_list')
        
        // console.log(foods);
        foods.forEach(food => {
            console.log(food);
            
            let div = document.createElement('div')
            div.className = 'row'
            div.innerHTML = `   
         <div class="col-12">
            <img src="${food.strMealThumb}" alt="" />
            <h3 onclick="getFoodDetails('${food.strIngredient1}')">${food.strMeal}</h3>
          </div>
          `
            foodList.appendChild(div)
        });
        
    }
}

let getFoodDetails = (strIngredient1) => {
    // console.log(strIngredient1);
    for (let i = 0; i < strIngredient1.length; i++) {
        const element = strIngredient1[i];
        console.log(element);
        
        
    }
    
}

