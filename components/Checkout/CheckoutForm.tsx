import { useContext, useState } from 'react'
import { CheckoutInput } from '../../utility'
import CheckoutInputs from './CheckoutInputs'
import { Summary } from './Summary'
import { Button } from '../../stories/Atoms'
import { FormDatas, FormErrors } from '../../types/index'
import { useRouter } from 'next/router'
import { CartContext } from '../../features/Cart/CartProvider'

interface Props {
  onShowModal: () => void
}

function CheckoutForm({ onShowModal }: Props) {
  const router = useRouter()
  const { cart } = useContext(CartContext)

  const [formDatas, setFormDatas] = useState<FormDatas>({
    name: new CheckoutInput('text'),
    email: new CheckoutInput('email'),
    tel: new CheckoutInput('tel'),
    address: new CheckoutInput('text'),
    zip: new CheckoutInput('number'),
    city: new CheckoutInput('text'),
    country: new CheckoutInput('text'),
    payment: new CheckoutInput('choice', ['cash', 'stripe']),
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: [],
    email: [],
    tel: [],
    address: [],
    zip: [],
    country: [],
    city: [],
    payment: [],
  })

  const inputHandler = (fieldName: string, value: string) => {
    updateFormDatas(fieldName, value)

    const input = formDatas[fieldName]
    let validationErrors = validateField(input)

    removeErrorOnValidInput(validationErrors, fieldName)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formIsValid = validateForm()

    if (formIsValid) {
      if (formDatas.payment.value === 'stripe') onShowModal()
      else if (formDatas.payment.value === 'cash') router.push('/confirmation')
    }
  }

  const validateField = (input: CheckoutInput) => {
    let validationErrors: string[] = []

    validationErrors = input.getValidationErrors()

    return validationErrors
  }

  const removeErrorOnValidInput = (
    validationErrors: string[],
    fieldName: string
  ) => {
    if (validationErrors.length === 0 && formErrors[fieldName].length !== 0) {
      const newErrors = { ...formErrors }
      newErrors[fieldName] = []

      setFormErrors(newErrors)
    }
  }

  const updateFormDatas = (fieldName: string, value: string) => {
    const newDatas = { ...formDatas }
    newDatas[fieldName].value = value

    setFormDatas(newDatas)
  }

  const validateForm = () => {
    let formIsValid = true

    for (const fieldName in formDatas) {
      const element = formDatas[fieldName]

      let validationErrors = validateField(element)

      if (validationErrors.length !== 0) {
        formIsValid = false

        setFormErrors((old) => {
          const newErrors = { ...old }
          newErrors[fieldName] = validationErrors
          return newErrors
        })
      }
    }

    return formIsValid
  }

  return (
    <form className="form-checkout">
      <div className="form-checkout__container">
        <h1 className="h1 h1--small text-black">Checkout</h1>
        <CheckoutInputs
          formDatas={formDatas}
          formErrors={formErrors}
          onHandleInput={inputHandler}
        />
      </div>
      <div className="form-checkout__container form-checkout__container--summary">
        <fieldset className="form-checkout__summary">
          <legend className="form-checkout__summary-subtitle">SUMMARY</legend>
          <h2 className="visually-hidden">Summary</h2>
          <Summary />
          <Button
            text={
              formDatas.payment.value !== 'cash' ? 'Continue & Pay' : 'Continue'
            }
            level="primary"
            onClickHandler={handleSubmit}
            disabled={cart.length === 0}
          />
        </fieldset>
      </div>
    </form>
  )
}

export default CheckoutForm
// TODO: Modifier le CORS du backend de stripe pour accepter notre localhost pour tester
