<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "button"
  }
})
</script>

<template>
  <button
    class="
      bg-white inline-flex cursor-pointer px-1 py-0.5 bg-white rounded-md font-semibold border-2 border-solid border-black text-base leading-tight outline-none
    "
    :type="props.type"
  >
    <slot />
  </button>
</template>