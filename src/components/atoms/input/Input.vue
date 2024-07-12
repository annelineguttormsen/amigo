<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
import InputCondition from './InputCondition.vue'

defineProps({
  label: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: true
  },
  error: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value):void {
  emit('update:modelValue', value)
}

const uuid = uuidv4()
</script>

<template>
  <div class="wrapper">
    <label 
      class="font-semibold text-base leading-normal self-start"
      :for="uuid"
    >
      <span>{{ label }}&thinsp;</span>
      <InputCondition :required="!!required" />
    </label>
    <input
      type="text"
      :class="{'input--error' : error}"
      class="input"
      :id="uuid"
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