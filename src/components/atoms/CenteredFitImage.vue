<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  srcset: {
    type: String,
    required: false
  },
  sizes: {
    type: String,
    required: false
  },
  alt: {
    type: String,
    required: true
  },
  // class prop is used to determine the width and height of the image
  class: {
    type: String,
    required: false,
    default: undefined
  }
})

</script>

<template>
  <div
    class="block relative overflow-hidden min-h-full"
    :class="props.class ?? 'w-full h-200'"
  >
    <img 
      :src="props.src"
      class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover object-center max-w-full w-full min-h-full"
      :srcset="props?.srcset"
      :sizes="props?.sizes"
      :alt="props.alt"
    />
  </div>
</template>