<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { makeNewProject } from '@/util/projects.util'
  import { getItem } from '@/util/localstorage.util'
  import Counter from '@/components/Counter.vue'
  import { StorageCrochetId, type CrochetProject } from '@/interfaces/globalInterfaces'

  const counterValue = ref(0)

  function newProject() {
    makeNewProject("TEST", 10, 10)
  }

  const crochetProjects= computed<CrochetProject[] | undefined>(() =>{
    const crochetProjectIds = getItem(StorageCrochetId.ListOfCrochetProjects)
    if (crochetProjectIds == undefined) {
      return undefined
    }
    const crochetProjects : CrochetProject[] | [] = []
    crochetProjectIds.forEach(id => {
      crochetProjects.push(getItem(`${StorageCrochetId.CrochetProject}#${id}`))
    });
    return crochetProjects
  })
</script>

<template>
  <Counter v-model="counterValue"/>
  <button
    @click="newProject()"
  >
    Lag prosjekt
  </button>
  <p
    v-if="crochetProjects == undefined"
  >
    Ingen lagrede prosjekter
  </p>
  <div
    v-else
  >
    <button
      v-for="(crochetProject, index) in crochetProjects"
    >
      Åpne opp prosjekt {{ crochetProject?.name }}
    </button>
  </div>
</template>