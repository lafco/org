import * as v from 'valibot'

const recipeSchema = v.object({
  vegetarian: v.boolean(),
  vegan: v.boolean(),
  glutenFree: v.boolean(),
  dairyFree: v.boolean(),
  veryHealthy: v.boolean(),
  cheap: v.boolean(),
  veryPopular: v.boolean(),
  sustainable: v.boolean(),
  lowFodmap: v.boolean(),
  weightWatcherSmartPoints: v.number(),
  gaps: v.string(),
  preparationMinutes: v.nullable(v.number()),
  cookingMinutes: v.nullable(v.number()),
  aggregateLikes: v.number(),
  healthScore: v.number(),
  creditsText: v.string(),
  license: v.nullable(v.string()),
  sourceName: v.string(),
  pricePerServing: v.number(),
  extendedIngredients: v.array(
    v.object({
      id: v.number(),
      aisle: v.string(),
      image: v.string(),
      consistency: v.string(),
      name: v.string(),
      nameClean: v.string(),
      original: v.string(),
      originalName: v.string(),
      amount: v.number(),
      unit: v.string(),
      meta: v.array(v.string()),
      measures: v.object({
        us: v.object({
          amount: v.number(),
          unitShort: v.string(),
          unitLong: v.string(),
        }),
        metric: v.object({
          amount: v.number(),
          unitShort: v.string(),
          unitLong: v.string(),
        }),
      }),
    })
  ),
  id: v.number(),
  title: v.string(),
  readyInMinutes: v.number(),
  servings: v.number(),
  sourceUrl: v.string(),
  image: v.string(),
  imageType: v.string(),
  summary: v.string(),
  cuisines: v.array(v.string()),
  dishTypes: v.array(v.string()),
  diets: v.array(v.string()),
  occasions: v.array(v.string()),
  instructions: v.string(),
  analyzedInstructions: v.array(
    v.object({
      name: v.string(),
      steps: v.array(
        v.object({
          number: v.number(),
          step: v.string(),
          ingredients: v.array(
            v.object({
              id: v.number(),
              name: v.string(),
              localizedName: v.string(),
              image: v.string(),
            })
          ),
          equipment: v.array(
            v.object({
              id: v.number(),
              name: v.string(),
              localizedName: v.string(),
              image: v.string(),
            })
          ),
        })
      ),
    })
  ),
  originalId: v.nullable(v.number()),
  spoonacularScore: v.number(),
  spoonacularSourceUrl: v.string(),
})

export default defineCachedEventHandler(async event => {
  const { recipes } = await $fetch<{ recipes: unknown }>('https://api.spoonacular.com/recipes/random', {
    query: {
      limitLicense: true,
      number: 1,
      apiKey: useRuntimeConfig().spoonacularApiKey
    }
  })
  try {
    return v.parse(v.array(recipeSchema), recipes)
  } catch (error) {
    console.log(error)
    return []
  }
}, {
  base: 'recipes',
  getKey: () => 'recipes',
  shouldBypassCache: () => false,
  maxAge: 1000 * 60 * 60 * 24, // 1 day
  staleMaxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
})
