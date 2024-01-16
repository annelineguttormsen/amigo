<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter, RouterLink } from 'vue-router'
  import { makeNewProject } from '@/util/projects.util'
  import { getItem } from '@/util/localstorage.util'
  import { StorageCrochetId } from '@/interfaces/globalInterfaces'
  import { useField } from 'vee-validate'
  import { stringRequiredSchema, numberRequiredSchema } from '@/validation/schema'
  import Dialog from '@/components/organisms/Dialog.vue'
  import Input from '@/components/atoms/input/Input.vue'
  import ButtonPrimary from '@/components/atoms/Button.Primary.vue'
  import CardLink from '@/components/molecules/Card.Link.vue'

  const router = useRouter()
  
  const crochetProjectIds = getItem(StorageCrochetId.ListOfCrochetProjects)
  
  const showCreateProjectDialog = ref(false)
  
  const { value: projectNameValue, errorMessage: projectNameError, validate: projectNameValidate } = useField('projectname', stringRequiredSchema('Name'))
  const { value: projectRowsValue, errorMessage: projectRowsError, validate: projectRowsValidate } = useField('projectname', numberRequiredSchema(0, 1000, 'Rows'))
  const { value: projectStitchesValue, errorMessage: projectStitchesError, validate: projectStitchesValidate } = useField('projectname', numberRequiredSchema(0, 1000, 'Stitches'))

  async function validateAndCreateProject() : Promise<void> {
    // TODO: redo this validation mess, convert into useForm
    await projectNameValidate()
    await projectRowsValidate()
    await projectStitchesValidate()

    if ([projectNameError, projectRowsError, projectStitchesError].every(err => err.value == undefined)) {
      const id = makeNewProject(projectNameValue.value, projectRowsValue.value, projectStitchesValue.value)
      router.push(`/project?id=${id}`)
    }
  }
</script>

<template>
  <h1>Amigo</h1>
  <ButtonPrimary
    @click="showCreateProjectDialog = true"
  >
    Create project
  </ButtonPrimary>
  <h2>Saved projects</h2>
  <p
    v-if="crochetProjectIds == undefined"
  >
    No saved projects
  </p>
  <div
    v-else
    class="grid grid-cols-3 gap-1"
  >
    <CardLink
      v-for="id in crochetProjectIds"
      :key="id"
      :to="`project?id=${id}`" 
    >
      Åpne opp prosjekt {{ getItem(`${StorageCrochetId.CrochetProject}#${id}`)?.name }}
    </CardLink>
  </div>
  <Dialog
    v-model="showCreateProjectDialog"
  >
    <template #header>
      Create new project
    </template>
    <template #content>
      <Input 
        v-model="projectNameValue"
        label="Project name"
        :error="projectNameError"
        :required="true"
      />
      <Input 
        v-model="projectRowsValue"
        label="Amount of rows"
        :error="projectRowsError"
        :required="true"
      />
      <Input 
        v-model="projectStitchesValue"
        label="Stitches per row"
        :error="projectStitchesError"
        :required="true"
      />
      <ButtonPrimary
        @click="validateAndCreateProject()"
      >
        Create project
      </ButtonPrimary>
    </template>
  </Dialog>
</template>