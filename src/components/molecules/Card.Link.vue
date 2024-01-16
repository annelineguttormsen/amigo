<script lang="ts" setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink
    class="flex justify-between items-center w-full p-1 font-semibold border-2 border-solid border-purple rounded-md font-semibold no-underline"
    :to="props.to"
  >
    <span><slot /></span>
    <svg 
      class="w-2 h-2"
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      focusable="false" 
      role="img"
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47 5.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 1 1-1.06-1.06L14.44 12 9.47 7.03a.75.75 0 0 1 0-1.06Z" fill="currentColor"></path>
    </svg>
  </RouterLink>
</template>