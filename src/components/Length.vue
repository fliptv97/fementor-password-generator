<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <div>
    <div :class="$style.meta">
      <label for="length">Character Length</label>
      <span :class="$style.value">{{ modelValue }}</span>
    </div>
    <input type="range" name="length" id="length" min="8" max="20" :value="modelValue"
      @change="$emit('update:modelValue', +$event.target.value)" />
  </div>
</template>

<style module>
.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 1rem;
}

.value {
  font-size: var(--heading-large-fs);
  color: var(--neon-green-clr);
}
</style>
