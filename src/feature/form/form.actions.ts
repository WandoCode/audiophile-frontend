import { createAction } from '@reduxjs/toolkit'

const setFirstName = createAction('form/setName', (newValue: string) => ({
  payload: { newValue },
}))

export { setFirstName }
