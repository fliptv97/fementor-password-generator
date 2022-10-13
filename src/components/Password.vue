<script>
export default {
  props: {
    password: String
  },
  data() {
    return {
      passwordWasCopied: false,
    };
  },
  methods: {
    onCopyClick() {
      if (!this.$props.password || this.$data.passwordWasCopied) return;

      this.$refs.input.select();
      // For mobile devices
      this.$refs.input.setSelectionRange(0, 30);

      navigator.clipboard.writeText(this.$refs.input.value);

      this.$data.passwordWasCopied = true;

      setTimeout(() => {
        this.$data.passwordWasCopied = false;
      }, 3000);
    }
  }
};
</script>

<template>
  <div>
    <input ref="input" :class="$style.input" :value="password" readonly placeholder="P4$5W0rD!">
    <div :class="$style.iconWrapper">
      <div :class="[$style.iconText, { [$style.iconTextVisible]: passwordWasCopied }]">
        COPIED
      </div>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" :class="$style.icon" @click="onCopyClick">
        <path
          d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
          fill="#A4FFAF" />
      </svg>
    </div>
  </div>
</template>

<style module lang="scss">
.input {
  flex-grow: 1;
  padding-inline-end: 1rem;
  font-size: var(--heading-large-fs);
  color: var(--almost-white-clr);
  border: none;
  background: none;
  overflow-x: scroll;

  &::placeholder {
    color: var(--almost-white-clr);
    opacity: 25%;
  }

  &:hover {
    cursor: default;
  }

  &:focus {
    outline: none;
  }
}

.icon {
  &Wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &Text {
    position: absolute;
    padding: .5rem 0 .5rem .5rem;
    color: var(--neon-green-clr);
    background-color: var(--dark-grey-clr);
    opacity: 0;
    transform: translateX(calc(-100% - 1rem));
    transition: opacity 300ms ease-in-out;

    &Visible {
      opacity: 1;
    }
  }

  &:hover {
    cursor: pointer;

    path {
      fill: var(--almost-white-clr);
    }
  }

  path {
    transition: fill 350ms ease-in-out;
  }
}
</style>
