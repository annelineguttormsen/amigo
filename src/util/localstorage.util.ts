export function getItem(id:string) : object | string[] | undefined {
  const value : object | string[] = JSON.parse(localStorage.getItem(id))

  return value ?? undefined
}

export function setItem(id:string, value:object | string[]) : void {
  localStorage.setItem(id, JSON.stringify(value))
}