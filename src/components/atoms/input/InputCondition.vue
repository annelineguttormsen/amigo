<script lang="ts" setup>
interface Props {
  required: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <span
    class="text-gray italic"
  >
    {{ props.required ? '(Required)' : '(Optional)' }}
  </span>
</template>