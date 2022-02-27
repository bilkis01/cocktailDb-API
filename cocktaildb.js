const searchDrinks = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data
    searchField.value = '';
    // load data
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.drinks))
    // console.log(url)
}
// 2.
const displaySearchResult = drink => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent='';
    drink.forEach(drinks => {
        // console.log(drinks);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div onclick="loadDrinkDetail(${drinks.idDrink})" class="card">
                <img src="${drinks.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drinks.strDrink}</h5>
                    <h6 class="card-title">${drinks.strCategory}</h6>
                    <p class="card-text"><h6>Instruction:</h6> ${drinks.strInstructions}</p>
                </div>
            </div>
        
         `;
         searchResult.appendChild(div);
    })

}
// 3.
const loadDrinkDetail = drinksId=>{
    const url =`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksId}`
   fetch(url)
   .then(res=> res.json())
   .then(data=>displayDrinksDetail(data.drinks[0]));
   
    // console.log(drinksId);
}
// 4.
const displayDrinksDetail = drunk =>{
    const drinkDetails = document.getElementById('drinks-details');
    drinkDetails.textContent='';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
    <img src="${drunk.strDrinkThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${drunk.strDrink}</h5>
          <p class="card-text">${drunk.strInstructions}</p>
        </div>
    
    `
    drinkDetails.appendChild(div);

    // console.log(drunk)
}