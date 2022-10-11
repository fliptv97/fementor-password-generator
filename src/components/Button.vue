<script>
export default {
  props: {
    text: String
  }
};
</script>

<template>
    <button :class="$style.btn">{{ text }}</button>
</template>

<style module>
.btn {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-block: 1.125rem;
    text-transform: uppercase;
    border: 2px solid var(--neon-green-clr);
    background: var(--neon-green-clr);
    transition: background 300ms ease-in-out, color 300ms ease-in-out;
}

.btn:hover {
    color: var(--neon-green-clr);
    background: transparent;
    cursor: pointer;
}
</style>
