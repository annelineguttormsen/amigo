<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
  import { makeNewProject } from '@/util/projects.util'
  import { getItem } from '@/util/localstorage.util'
  import { StorageCrochetId } from '@/interfaces/globalInterfaces'

  function newProject() {
    makeNewProject("TEST", 10, 10)
  }

  const crochetProjectIds = getItem(StorageCrochetId.ListOfCrochetProjects)
</script>

<template>
  <button
    @click="newProject()"
  >
    Lag prosjekt
  </button>
  <p
    v-if="crochetProjectIds == undefined"
  >
    Ingen lagrede prosjekter
  </p>
  <div
    v-else
  >
    <RouterLink
      v-for="id in crochetProjectIds"
      :key="id"
      :to="`project?id=${id}`" 
    >
      Åpne opp prosjekt {{ getItem(`${StorageCrochetId.CrochetProject}#${id}`)?.name }}
    </RouterLink>
  </div>
</template>