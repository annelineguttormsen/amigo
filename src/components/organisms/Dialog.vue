<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const dialogElement = ref(null)

onMounted(() => {
  props.modelValue
    ? (dialogElement.value as HTMLDialogElement).showModal()
    : (dialogElement.value as HTMLDialogElement).close()
})

watch(() => props.modelValue, () => {
  props.modelValue
    ? (dialogElement.value as HTMLDialogElement).showModal()
    : (dialogElement.value as HTMLDialogElement).close()
})

function closeDialog() : void {
  emit('update:modelValue', false)
}

function openDialog() : void {
  emit('update:modelValue', true)
}
</script>

<template>
  <dialog
    ref="dialogElement"
    class="border-none outline-none p-0 backdrop-opacity-50 max-w-[60ch] w-full bg-white absolute rounded-md mx-auto mt-6"
    @close="closeDialog()"
  >
  <header
    class="p-1 flex gap-1 justify-between bg-purple"
  >
    <h1>
      <slot name="header" />
    </h1>
    <button
      @click="closeDialog()"
      class="flex-none border-none bg-transparent cursor-pointer"
    >
      ✖️
    </button>
  </header>
  <section
    class="p-1 flex flex-col w-full gap-1"
  >
    <slot name="content" />
  </section>
  </dialog>
</template>