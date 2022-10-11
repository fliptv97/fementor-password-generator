<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
</script>

<template>
  <div :class="$style.container">
    <h1 :class="$style.title">Password Generator</h1>
    <PasswordGenerator />
  </div>
</template>

<style module>
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
  font-size: var(--font-size);
  color: var(--grey-clr);
}
</style>
