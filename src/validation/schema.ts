import { string, number } from 'yup'

export const stringRequiredSchema = (fieldName?: string) => {
  return string()
  .required(`${fieldName ?? 'This field'} is required`)
  .max(50, `${fieldName ?? 'This field'} can have a maximum of 50 characters`)
}

export const numberRequiredSchema = (minNumber: number, maxNumber: number, fieldName?: string) => {
  return number()
  .typeError(`${fieldName ?? 'This field'} must be a number`)
  .required(`${fieldName ?? 'This field'} is required`)
  .max(maxNumber, `${fieldName ?? 'This field'} can't be more than ${maxNumber}`)
  .min(minNumber, `${fieldName ?? 'This field'} can't be less than ${minNumber}`)
}