<script setup>
import Strength from './Strength.vue';
import Button from './Button.vue';
import Length from './Length.vue';
</script>

<script>
export default {
  data() {
    return {
      passwordLength: 14,
      options: {
        uppercaseLetters: false,
        lowercaseLetters: false,
        numbers: false,
        symbols: false,
      }
    };
  },
  computed: {
    passwordStrength() {
      return Object.keys(this.$data.options).filter(key => this.$data.options[key]).length;
    }
  },
  methods: {
    onGenerateClick() {
      console.log(this.$data);
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <div :class="[$style.card, $style.passwordCard]">
      <div :class="$style.password">P4$5W0rD!</div>
      <img src="/assets/icons/icon-copy.svg" alt="copy" width="32" height="32">
    </div>
    
    <div :class="[$style.card, $style.mainCard]">
      <Length :class="$style.length" v-model="passwordLength" />
      
      <div :class="$style.options">
        <div :class="$style.optionField">
          <input
            type="checkbox"
            id="uppercase"
            v-model="options.uppercaseLetters" />
          <label for="uppercase">Include Uppercase Letters</label>
        </div>

        <div :class="$style.optionField">
          <input
            type="checkbox"
            id="lowercase"
            v-model="options.lowercaseLetters" />
          <label for="lowercase">Include Lowercase Letters</label>
        </div>

        <div :class="$style.optionField">
          <input
            type="checkbox"
            id="numbers"
            v-model="options.numbers" />
          <label for="numbers">Include Numbers</label>
        </div>

        <div :class="$style.optionField">
          <input
            type="checkbox"
            id="symbols"
            v-model="options.symbols" />
          <label for="symbols">Include Symbols</label>
        </div>
      </div>

      <Strength :class="$style.strength" :value="passwordStrength" />

      <Button text="Generate" @click="onGenerateClick" />
    </div>
  </div>
</template>

<style module>
.container {
  width: min(95%, 540px);
}

.card {
  padding: 1rem;
  background-color: var(--dark-grey-clr);
}

.card:first-child {
  margin-block-end: 1rem;
}

.passwordCard {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mainCard {
  display: flex;
  flex-direction: column;
}

.password {
  flex-grow: 1;
  font-size: var(--heading-large-fs);
}

.options {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-block-end: 2rem;
}

.options input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.optionField {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.length {
  margin-block-end: 2rem;
}

.strength {
  margin-block-end: 1rem;
}
</style>
