<script setup lang="ts">
  const { setLocale } = useI18n()
</script>

<template>
  <nav>
    <div class="navbar">
      <div class="links">
        <NuxtLink prefetched-class="link" to="/">
          {{ $t('home', { username: 'cupinxa' }) }}
        </NuxtLink>
        <NuxtLink prefetched-class="link" to="/dashboard">
          {{ $t('dashboard') }}
        </NuxtLink>
        <NuxtLink prefetched-class="link" to="/expenses">
          {{ $t('expenses') }}
        </NuxtLink>
        <NuxtLink prefetched-class="link" to="/recipes">
          {{ $t('recipes') }}
        </NuxtLink>
      </div>
      <div class="locale">
        <button @click="setLocale('en')">{{ $t('en') }}</button>
        <button @click="setLocale('pt')">{{ $t('pt') }}</button>
      </div>
    </div>
    <slot />
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: monospace;
  font-size: 16px;
  width: 100%;
}
.links {
  display: flex;
  gap: 1.2%;
}
.locale {
  display: flex;
  gap: 5px;
  justify-content: flex-end;
}
nav {
  background-color: rgb(186, 253, 180);
  padding: 12px;
  height: 100vh;
}
</style>

