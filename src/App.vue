<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
</script>

<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Password Generator</h1>
    <PasswordGenerator />
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  margin: 0;
  margin-block-end: 2rem;
  font-size: var(--heading-medium-fs);
  color: var(--grey-clr);

  @media (max-width: 600px) {
    margin-block-end: 1rem;
    font-size: var(--body-fs);
  }
}
</style>
