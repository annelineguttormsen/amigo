<script lang="ts" setup>
import { defineProps } from 'vue'
import { getItem } from '../util/localstorage.util'
import { CrochetProject, StorageCrochetId } from '@/interfaces/globalInterfaces'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const currentProject:CrochetProject | undefined = getItem(`${StorageCrochetId.CrochetProject}#${props.id}`)
</script>

<template>
  <p v-if="currentProject == undefined">
    Ingen prosjekter under denne ID'en: {{ props?.id }}
  </p>
  <p v-else>
    {{ currentProject.name }}
  </p>

</template>
