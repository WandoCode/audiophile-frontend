import { Button, Input, RadioInput } from '../stories/Atoms'
import CashImg from '../assets/icon-cash-on-delivery.svg'
import { Summary } from '../components/Checkout/Summary'
import { InnerNav } from '../stories/Molecules'
import { CheckoutInput } from '../utility'
import { useState, useContext, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import useFetchStripeClientSecret from '../hooks/useFetchStripeClientSecret'
import { CartContext } from '../components/Cart/CartProvider'
import StripeModal from '../components/Checkout/StripeModal'
import { Elements } from '@stripe/react-stripe-js'
import Modal from '../components/utils/Modal'
import config from '../config.json'
import { useNavigate } from 'react-router-dom'

interface FormDatas {
  [key: string]: CheckoutInput
}

interface FormErrors {
  [key: string]: string[]
}

const stripePromise = loadStripe(config.stripeTestPublicAPIKey)

function Checkout() {
  const navigate = useNavigate()
  const { stripeDatas } = useContext(CartContext)

  const stripeClientSecret = useFetchStripeClientSecret(stripeDatas)

  const [showModal, setShowModal] = useState(true)
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

  useEffect(() => {
    console.log(stripeClientSecret)
  }, [stripeClientSecret])

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
      console.log(formIsValid)

      if (formDatas.payment.value === 'stripe') setShowModal(formIsValid)
      if (formDatas.payment.value === 'cash') navigate('/confirmation')
    }
  }

  const validateField = (input: CheckoutInput) => {
    let validationErrors: string[] = []

    validationErrors = input.getValidationErrors()
    console.log(validationErrors)

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

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && stripeClientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: stripeClientSecret }}
        >
          <Modal description={'Modal of paiement'} closeModal={closeModal}>
            <StripeModal />
          </Modal>
        </Elements>
      )}

      <div className="checkout container">
        <InnerNav />

        <form className="form-checkout">
          <div className="form-checkout__container">
            <h1 className="h1 h1--small text-black">Checkout</h1>
            <fieldset className="form-checkout__subsection">
              <h2 className="visually-hidden">Checkout form</h2>
              <legend className="form-checkout__subtitle">
                BILLINGS DETAILS
              </legend>
              <div className="form-checkout__controller form-checkout__controller--billing">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  id="name"
                  currValue={formDatas.name.value}
                  placeholder="Alexei"
                  errorText={formErrors.name[0]}
                  error={formErrors.name.length !== 0}
                  onChangeHandler={(e) => inputHandler('name', e.target.value)}
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  id="email"
                  currValue={formDatas.email.value}
                  placeholder="alexei@gmail.com"
                  errorText={formErrors.email[0]}
                  error={formErrors.email.length !== 0}
                  onChangeHandler={(e) => inputHandler('email', e.target.value)}
                />
                <Input
                  label="Phone Number"
                  name="tel"
                  type="tel"
                  id="tel"
                  currValue={formDatas.tel.value}
                  placeholder="+1 (202) 555-0136"
                  errorText={formErrors.tel[0]}
                  error={formErrors.tel.length !== 0}
                  onChangeHandler={(e) => inputHandler('tel', e.target.value)}
                />
              </div>
            </fieldset>

            <fieldset className="form-checkout__subsection">
              <legend className="form-checkout__subtitle">SHIPPING INFO</legend>
              <div className="form-checkout__controller form-checkout__controller--shipping">
                <Input
                  label="Address"
                  name="address"
                  type="text"
                  id="address"
                  currValue={formDatas.address.value}
                  placeholder="1137 Williams Avenue"
                  errorText={formErrors.address[0]}
                  error={formErrors.address.length !== 0}
                  onChangeHandler={(e) =>
                    inputHandler('address', e.target.value)
                  }
                />
                <Input
                  label="ZIP Code"
                  name="zip"
                  type="number"
                  id="zip"
                  currValue={formDatas.zip.value}
                  placeholder="101010"
                  errorText={formErrors.zip[0]}
                  error={formErrors.zip.length !== 0}
                  onChangeHandler={(e) => inputHandler('zip', e.target.value)}
                />
                <Input
                  label="City"
                  name="city"
                  type="text"
                  id="city"
                  currValue={formDatas.city.value}
                  placeholder="New York"
                  errorText={formErrors.city[0]}
                  error={formErrors.city.length !== 0}
                  onChangeHandler={(e) => inputHandler('city', e.target.value)}
                />
                <Input
                  label="Country"
                  name="country"
                  type="text"
                  id="country"
                  currValue={formDatas.country.value}
                  placeholder="United States"
                  errorText={formErrors.country[0]}
                  error={formErrors.country.length !== 0}
                  onChangeHandler={(e) =>
                    inputHandler('country', e.target.value)
                  }
                />
              </div>
            </fieldset>

            <fieldset className="form-checkout__subsection">
              <legend className="form-checkout__subtitle">
                PAYMENT DETAILS
              </legend>
              <div className="form-checkout__controller form-checkout__controller--payment">
                <div className="form-checkout__radio-controller">
                  <p className="form-checkout__radio-title">Payment Method</p>
                  <RadioInput
                    value="stripe"
                    label="Card/Bancontact"
                    name="payment"
                    currValue={formDatas.payment.value}
                    error={formErrors.payment.length !== 0}
                    onChangeHandler={(e) =>
                      inputHandler('payment', e.target.value)
                    }
                  />

                  <RadioInput
                    value="cash"
                    label="Cash on Delivery"
                    name="payment"
                    currValue={formDatas.payment.value}
                    error={formErrors.payment.length !== 0}
                    onChangeHandler={(e) =>
                      inputHandler('payment', e.target.value)
                    }
                  />
                </div>
                {formDatas.payment.value === 'stripe' && (
                  <div className="form-checkout__payment-details">
                    <img src={CashImg} alt="" />
                    <p className="form-checkout__text">
                      The 'Card/Bancontact' option offer a large choice of
                      payment facilities: Bancontact, Visa, MasterCard, etc. The
                      payment will be processed by Stripe.
                    </p>
                  </div>
                )}
                {formDatas.payment.value === 'cash' && (
                  <div className="form-checkout__payment-details">
                    <img src={CashImg} alt="" />
                    <p className="form-checkout__text">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </fieldset>
          </div>
          <div className="form-checkout__container form-checkout__container--summary">
            <fieldset className="form-checkout__summary">
              <legend className="form-checkout__summary-subtitle">
                SUMMARY
              </legend>
              <h2 className="visually-hidden">Summary</h2>
              <Summary />
              <Button
                text={
                  formDatas.payment.value !== 'cash'
                    ? 'Continue & Pay'
                    : 'Continue'
                }
                level="primary"
                onClickHandler={handleSubmit}
              />
            </fieldset>
          </div>
        </form>
      </div>
    </>
  )
}

export { Checkout }
