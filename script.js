
const YOUR_APP_ID = "f03a225a"
const YOUR_APP_KEY = "6e484f358af33d3806801aa4a000c22f" 


const buildRecipeList = (json) => {
  const recipeList = document.getElementById('recipeList')
  let output = ""
  json.hits.forEach((recipeContainer) => {
  console.log(recipeContainer)
  output += `
            <section class="recipe-card">
                <p class="card-name">
                  <b>🍲 ${recipeContainer.recipe.label}</b>
                </p>
                <a href="${recipeContainer.recipe.url}">
                  <img class="card-image" src="${recipeContainer.recipe.image}"></img>
                </a>
                <p class="card-yield"><b>Yield -</b> ${recipeContainer.recipe.yield}</p>
                <p class="card-healthiness"><b>Healthiness -</b> ${recipeContainer.recipe.healthLabels}</p>
                <a href="${recipeContainer.recipe.url}">
                  <button class="card-button">Recipe</button>
                </a>
                <p class="source">
                  <b><i>Source - ${recipeContainer.recipe.source}</i></b>
                </p>
              
            </section>
            `
  recipeList.innerHTML = output
  })
}

const fetchEdamamData = (event) => {
  event.preventDefault()
  const mainIngredient = document.getElementById('main-ingredient').value
  const numberOfRecipe = document.getElementById('number-of-recipes').value
  const imageSize ="THUMBNAIL"
  const EDAMAM_URL=`https://api.edamam.com/search?q=${mainIngredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=${numberOfRecipe}&calories=591-722&health=alcohol-free&imageSize=${imageSize}`

  fetch(EDAMAM_URL)
    .then((response) => {return response.json()})
    .then((json) => {
      buildRecipeList(json)
    }).catch((error) => {
      console.log(error, "There has been an error")
    })
}

fetchEdamamData()

