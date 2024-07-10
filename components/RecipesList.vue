<script setup lang="ts">
  const { data } = useFetch('/api/recipes')
  const recipes = computed(() => {
    return data?.value?.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        readyInMinutes: recipe.readyInMinutes,
        servings: recipe.servings,
        sourceUrl: recipe.sourceUrl,
        image: recipe.image,
        imageType: recipe.imageType,
        summary: recipe.summary,
        ingredients: recipe.extendedIngredients,
        instructions: recipe.analyzedInstructions,
      }
    })
  })
</script>

<template>
  <pre v-for="recipe in recipes">
    Name: {{ recipe.title }}
    Ready in: {{ recipe.readyInMinutes }} minutes
    Servings: {{ recipe.servings }}
    Steps:
    <span v-for="instruction in recipe.instructions">
      <span v-for="step in instruction.steps">
        {{ step.number }}. {{ step.step }}
      <span v-for="ingredient in step.ingredients">
        {{ ingredient.name }}
      </span>
    </span>
    </span>
  </pre>
</template>

