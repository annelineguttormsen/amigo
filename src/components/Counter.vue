<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

let disableDecreaseButton : any = computed(() => {
  return props.modelValue == 0 
    ? true 
    : undefined
})

function increaseValue():void {
  let newValue = props.modelValue + 1
  emit('update:modelValue', newValue)
}

function decreaseValue():void {
  let newValue = props.modelValue - 1
  newValue = newValue < 0 
    ? 0
    : newValue
  emit('update:modelValue', newValue)
}
</script>

<template>
  <div>
    <button
      @click="decreaseValue()"
      :disabled="disableDecreaseButton"
    >
      -
    </button>
    <div>{{ props.modelValue }}</div>
    <button
      @click="increaseValue()"
    >
      +
    </button>
  </div>
</template>

<style scoped>
  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--color-text);
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: 3px solid rgb(57, 57, 143);
  }
</style>