<script lang="ts" setup>
import { ref } from 'vue'

interface Props {
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined
})

const emit = defineEmits(['update:modelValue'])

function accordionSetup() {
  const open = ref(props.modelValue ?? false)

  // update either the open ref directly
  // or emit the new value, based on whether or not the modelValue is defined
  const toggleAccordion = (): void => {
    if (props?.modelValue !== undefined) {
      emit('update:modelValue', !props.modelValue)
    } else {
      open.value = !open.value
    }
  }

  return {
    open,
    toggleAccordion
  }
}

const { open, toggleAccordion } = accordionSetup()
</script>

<template>
  <section
    class="w-full flex flex-col relative"
  >
    <button
      @click.stop="toggleAccordion"
      class="appearance-none w-full container-sm container-row text-left justify-between border-4 border-black border-solid cursor-pointer font-bold text-xl bg-white focus:bg-purple"
    >
      <slot name="header" />
      <div class="flex-none w-2 h-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="aspect-square">
          <path fill="currentColor" fill-rule="evenodd" d="M7.29289,10.7071 C7.68342,11.0976 8.31658,11.0976 8.70711,10.7071 L11.7071,7.70711 C12.0976,7.31658 12.0976,6.68342 11.7071,6.29289 C11.3166,5.90237 10.6834,5.90237 10.2929,6.29289 L8,8.58579 L5.70711,6.29289 C5.31658,5.90237 4.68342,5.90237 4.29289,6.29289 C3.90237,6.68342 3.90237,7.31658 4.29289,7.70711 L7.29289,10.7071 Z"/>
        </svg>
      </div>
    </button>
    <div
      :class="`
        absolute container-sm bottom-0 flex flex-col flex-start items-start gap-1 invisible translate-x-0 translate-y-full border-4 border-black border-solid border-t-0
        ${open ? '!relative !visible !translate-y-0' : ''}
      `"
      :aria-hidden="!open"
    >
      <slot name="content" />
    </div>
  </section>
</template>