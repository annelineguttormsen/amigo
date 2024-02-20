import { CrochetProject, StorageCrochetId, type ICrochetProject } from '@/interfaces/globalInterfaces'
import { getItem, setItem } from './localstorage.util'
import { CrochetCounter } from '../interfaces/globalInterfaces'

export function makeNewProject(name: string, totalRows: number, stitchesPerRow: number, info?: string) : string {
  const id = crypto.randomUUID()

  // create new crochet project with details
  const newCrochetProject : CrochetProject = new CrochetProject(id, name, totalRows, stitchesPerRow, info)
  
  // if there are no saved projects, create an empty array
  const savedCrochetProjects : string[] = getItem(StorageCrochetId.ListOfCrochetProjects) ?? []
  savedCrochetProjects.push(id)

  // create crochet counter
  const newCrochetCounter : CrochetCounter = new CrochetCounter(id, 0, 0)
  
  // save all the values, with id, to local storage
  setItem(`${StorageCrochetId.CrochetProject}#${id}`, newCrochetProject)
  setItem(StorageCrochetId.ListOfCrochetProjects, savedCrochetProjects)
  setItem(`${StorageCrochetId.CrochetProjectCounter}#${id}`, newCrochetCounter)

  // return the ID of the project
  return id
}

export function getCrochetCounter(id: string) : CrochetCounter | undefined {
  const localStorageCounter = getItem(`${StorageCrochetId.CrochetProjectCounter}#${id}`) as CrochetCounter
  if (localStorageCounter != undefined || Object.keys(localStorageCounter).length == 0) {
    return new CrochetCounter(localStorageCounter.id, localStorageCounter.rows, localStorageCounter.stitches)
  } else {
    return undefined
  }
}

export function getCrochetProject(id: string) : CrochetProject | undefined {
  const localStorageProject = getItem(`${StorageCrochetId.CrochetProject}#${id}`) as CrochetProject
  if (localStorageProject != undefined || Object.keys(localStorageProject).length == 0) {
    return new CrochetProject(localStorageProject.id, localStorageProject.name, localStorageProject.meta.totalRows, localStorageProject.meta.stitchesPerRow)
  } else {
    return undefined
  }
}