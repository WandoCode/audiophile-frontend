import { createReducer } from '@reduxjs/toolkit'
import { setFirstName } from './form.actions'

const initialForm = {
  firstName: '',
}

const formReducer = createReducer(initialForm, (builder) => {
  return builder.addCase(setFirstName, (state, action) => {
    state.firstName = action.payload.newValue
  })
})

export default formReducer
