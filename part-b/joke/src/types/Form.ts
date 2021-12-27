export type FormInput<T> = T & {
    firstName: { value: string }
    lastName: { value: string }
    categories: { value: string[] }
    numOfResult: { value: string }
}
