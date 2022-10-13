<script setup>
import Password from './Password.vue';
import Strength from './Strength.vue';
import Button from './Button.vue';
import Length from './Length.vue';
</script>

<script>
import generatePassword from './../helpers/generate-password';

export default {
  data() {
    return {
      password: '',
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
    isGenerateButtonDisabled() {
      return Object.keys(this.$data.options).filter(key => this.$data.options[key]).length === 0;
    },
    passwordStrength() {
      return Object.keys(this.$data.options).filter(key => this.$data.options[key]).length;
    }
  },
  methods: {
    onGenerateClick() {
      this.$data.password
        = generatePassword(this.$data.passwordLength, this.$data.options);
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <Password :class="[$style.card, $style.passwordCard]" :password="password" />
    
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

      <Button
        text="Generate"
        @click="onGenerateClick"
        :disabled="isGenerateButtonDisabled"
        :withIcon="true" />
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
