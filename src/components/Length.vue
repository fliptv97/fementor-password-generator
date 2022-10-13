<script>
export default {
  props: ['value'],
  methods: {
    handleChange(e) {
      this.$emit('change', +e.target.value);
    }
  }
}
</script>

<template>
  <div>
    <div :class="$style.meta">
      <label for="length">Character Length</label>
      <span :class="$style.value">{{ value }}</span>
    </div>
    <input type="range" name="length" id="length" min="8" max="20" :value="value" @change.stop="handleChange" />
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
