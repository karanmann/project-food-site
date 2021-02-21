
const YOUR_APP_ID = "f03a225a"
const YOUR_APP_KEY = "6e484f358af33d3806801aa4a000c22f" 
const mainIngredient = "vegan"
const numberOfRecipe = 10
const imageSize ="THUMBNAIL"
const EDAMAM_URL=`https://api.edamam.com/search?q=${mainIngredient}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=${numberOfRecipe}&calories=591-722&health=alcohol-free&imageSize=${imageSize}`


const buildRecipeList = (data) => {
  const recipeList = document.getElementById('recipeList')
  let output = ""
  let ingredients
  data.hits.forEach((recipeContainer) => {
  console.log(recipeContainer)

  output += `
            <section class="recipe-card">
              <p class="card-name">${recipeContainer.recipe.label}</p>
              <img class="card-image" src="${recipeContainer.recipe.image}"></img>
              <p>Yield : ${recipeContainer.recipe.yield}</p>
              <p>Healthiness - ${recipeContainer.recipe.healthLabels}</p>
              <p> Source - ${recipeContainer.recipe.source}</p>
              <p> Recipe </p>

            </section>
            `
  recipeList.innerHTML = output
  })
}

const fetchEdamamData = () => {
  fetch(EDAMAM_URL)
    .then((response) => {return response.json()})
    .then((data) => {
      buildRecipeList(data)
    }).catch((error) => {
      console.log(error, "There has been an error")
    })
}

fetchEdamamData()

