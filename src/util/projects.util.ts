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
  const newCrochetCounter : CrochetCounter = new CrochetCounter(id)
  
  // save all the values, with id, to local storage
  setItem(`${StorageCrochetId.CrochetProject}#${id}`, newCrochetProject)
  setItem(StorageCrochetId.ListOfCrochetProjects, savedCrochetProjects)
  setItem(`${StorageCrochetId.CrochetProjectCounter}#${id}`, newCrochetCounter)

  // return the ID of the project
  return id
}