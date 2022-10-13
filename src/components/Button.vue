<script>
export default {
  props: {
    text: String,
    withIcon: Boolean
  }
};
</script>

<template>
  <button :class="$style.btn">
    {{ text }}
    <svg v-if="withIcon" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
    </svg>
  </button>
</template>

<style module lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-block: 1.125rem;
  text-transform: uppercase;
  color: var(--dark-grey-clr);
  border: 2px solid var(--neon-green-clr);
  background: var(--neon-green-clr);
  transition:
    background 300ms ease-in-out,
    color 300ms ease-in-out,
    opacity 300ms ease-in-out;

  &:not(:disabled):hover {
    color: var(--neon-green-clr);
    background: transparent;
    cursor: pointer;
  }

  &:disabled {
    opacity: .5;
  }

  svg {
    margin-inline-start: 1.5rem;
    align-self: center;
  }

  path {
    fill: var(--dark-grey-clr);
  }
} 
</style>
