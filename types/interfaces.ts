export interface Transaction {
  id: string
  title: string
  value: number
  source: string
  description: string
  created_at: string
}

export interface Recipe {
  id: number
  title: string
  readyInMinutes: number
  servings: number
  sourceUrl: string
  image: string
  imageType: string
  summary: string
  extendedIngredients: Array<Ingredient>
  analyzedInstructions: Array<Instruction>
}

export interface Ingredient {
  id: number
  name: string
  amount: number
  unit: string
  measures: {
    metric: {
      amount: number
      unitShort: string
      unitLong: string
    }
  }
}

export interface Instruction {
  name: string
  steps: Array<{
    number: number
    step: string
    ingredients: Array<Ingredient>
  }>
}
