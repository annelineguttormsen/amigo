<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
import Radio from '@/components/atoms/input/Radio.vue'
import type { RadioOption } from './interfaces'

interface Props {
  legend: string
  modelValue: null | boolean
  options: RadioOption[]
  error?: string
  required?: boolean
  name?: string
}
const props = defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

function updateValue(value: string | boolean): void {
  emit('update:modelValue', value)
}

// link all the radio group options by the name attribute
const uuid = uuidv4()
</script>

<template>
  <fieldset class="flex flex-col items-start gap-0.5 border-none p-0">
    <legend class="font-semibold leading-normal mb-0.5">
      <span>{{ props.legend }}</span>
      <span
        v-if="required"
        class="text-gray italic"
      >
        (Required)
      </span>
      <span
        v-else
        class="text-gray italic"
      >
        (Optional)
      </span>
    </legend>
    <Radio 
      @update:modelValue="updateValue($event)"
      v-for="(option, index) in props.options"
      :key="index"
      :modelValue="props.modelValue"
      :name="uuid"
      v-bind="option"
    />
  </fieldset>
</template>