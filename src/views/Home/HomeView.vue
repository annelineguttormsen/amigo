<script lang="ts" setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { makeNewProject } from '@/util/projects.util'
  import { getItem } from '@/util/localstorage.util'
  import { StorageCrochetId } from '@/interfaces/globalInterfaces'
  import Dialog from '@/components/organisms/Dialog.vue'
  import Input from '@/components/atoms/input/Input.vue'

  function newProject() {
    makeNewProject("TEST", 10, 10)
  }

  const crochetProjectIds = getItem(StorageCrochetId.ListOfCrochetProjects)

  const showCreateProjectDialog = ref(false)
</script>

<template>
  <Dialog
    v-model="showCreateProjectDialog"
  >
    <template #header>
      Create new project
    </template>
    <template #content>
      Hey baby girl
      <Input 
        v-model="projectName"
        label="Project name"
      />
    </template>
  </Dialog>
  <button
    @click="showCreateProjectDialog = true"
    class="p-0.25"
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