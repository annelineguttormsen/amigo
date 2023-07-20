<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true
  },
  error: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value):void {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="wrapper">
    <label class="label">
      {{ label }}
    </label>
    <input
      type="text"
      :class="{'input--error' : error}"
      class="input"
      :value="modelValue"
      @blur="updateValue(($event.target as HTMLInputElement).value)"
    />
    <p 
      v-if="error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>

<style type="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.label {
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 600;
}
.input {
  all: unset;
  box-sizing: border-box;
  cursor: auto;
  background-color: #ffc700;
  box-shadow: inset 5px 5px #fff, 5px 5px #ffc700;
  transition: all .2s linear;
  color: #222;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 2px solid #222;
  max-width: 60ch;
  height: 3rem;
}
.input--error {
  border-color: red;
}

.input:focus {
  box-shadow: inset 0px 0px #fff, 0px 0px #ffc700;
}
.input::selection {
  background: purple;
  color: white;
}
.error {
  font-weight: 600;
  color: red;
}
</style>