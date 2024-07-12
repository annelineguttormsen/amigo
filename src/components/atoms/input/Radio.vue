<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'

interface Props {
  label: string
  modelValue: null | boolean
  value: boolean | string
  required?: boolean
  name: string
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

function updateValue(): void {
  emit('update:modelValue', props.value)
}

const uuid = uuidv4()
</script>

<template>
  <div class="flex items-start gap-0.5 p-1">
    <!-- hide input, but have it still be available -->
    <input
      type="radio"
      class="sr-only"
      :required="props.required"
      :id="uuid"
      :value="props.value"
      :checked="props.modelValue == value"
      :name="props.name"
      @change="updateValue()"
    />
    <label 
      :class="`label block relative pl-2.5 pt-0.25 cursor-pointer select-none font-semibold text-base leading-semibold self-start ${props.modelValue == props.value ? 'label--checked' : ''}`"
      :for="uuid"
    >
      <span>{{ props.label }}</span>
    </label>
  </div>
</template>

<style type="scss" scoped>
/* add radio button styling to the label's ::before pseudo element */
/* label is automatically linked to the input element, and clicking the label will check off the input radio element */
/* this gives the impression of the pseudo element being the radio button */
.label::before {
  box-sizing: border-box;
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 3px solid black;
  box-shadow: inset 0 0 0 4px white;
}

.label--checked::before {
  background: black;
}

/* if the input element is focused on, show a focus type styling on the pseudo element of the label element */
input:focus + .label::before {
  outline: 4px solid dodgerblue;
}
</style>