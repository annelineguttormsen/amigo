export enum StorageCrochetId {
  CrochetProject = "CROCHET_PROJECT",
  CrochetProjectCounter = "CROCHET_PROJECT_COU  NTER",
  ListOfCrochetProjects = "LIST_OF_CROCHET_PROJECTS"
}

export interface ICrochetProject {
  id: string
  name: string
  info?: string
  meta: {
    totalRows: number
    stitchesPerRow: number
  }
}

export interface ICrochetCounter {
  // when stitches equals stitchesPerRow, count.rows gets updated with one
  rows: number
  stitches: number
}

export class CrochetProject implements ICrochetProject {
  id: string
  name: string
  info?: string | undefined
  meta: {
    totalRows: number
    stitchesPerRow: number
  }

  constructor(id: string, name: string, totalRows: number, stitchesPerRow: number, info?: string) {
    this.id = `CROCHET_PROJECT#${id}`
    this.name = name
    this.meta = {
      totalRows: totalRows,
      stitchesPerRow: stitchesPerRow
    }
    if (info) {
      this.info = info
    }
  }
}

export class CrochetCounter implements ICrochetCounter {
  id: string
  rows: number
  stitches: number
  
  constructor(id: string) {
    this.id = id
    this.rows = 0
    this.stitches = 0
  }

  incrementStitches(increment: number) : void {
    this.stitches += increment
  }

  reduceStitches(reducement: number) : void {
    this.stitches -= reducement
  }

  resetStitches() : void {
    this.stitches = 0
  }
}