import { Button, Input, RadioInput } from '../../stories/Atoms'
import { useState, useEffect } from 'react'
import CashImg from '../../assets/icon-cash-on-delivery.svg'
import { InnerNav } from '../../stories/Molecules'
import {
  validateEmail,
  validateNumber,
  validateTel,
  validateText,
} from '../../utility/formValidation/payment'
import Summary from './Summary'
import { formatPrice } from '../../utility/string'

interface FormDatas {
  [key: string]: string
  name: string
  email: string
  tel: string
  address: string
  zip: string
  city: string
  country: string
  payment: string
  eMoneyId: string
  eMoneyPin: string
}

interface FormErrors {
  [key: string]: string[]
  name: string[]
  email: string[]
  tel: string[]
  address: string[]
  zip: string[]
  city: string[]
  country: string[]
  payment: string[]
  eMoneyId: string[]
  eMoneyPin: string[]
}

function Checkout() {
  const [formDatas, setFormDatas] = useState<FormDatas>({
    name: '',
    email: '',
    tel: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
    eMoneyId: '',
    eMoneyPin: '',
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
    eMoneyId: [],
    eMoneyPin: [],
  })

  const inputHandler = (fieldName: string, value: string) => {
    const newDatas = { ...formDatas }
    newDatas[fieldName] = value

    setFormDatas(newDatas)
    let validationErrors = validateField(fieldName, value)

    if (validationErrors.length === 0 && formErrors[fieldName].length !== 0) {
      const newErrors = { ...formErrors }
      newErrors[fieldName] = []

      setFormErrors(newErrors)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    for (const fieldName in formDatas) {
      const element = formDatas[fieldName]

      let validationErrors = validateField(fieldName, element)

      if (validationErrors.length !== 0) {
        setFormErrors((old) => {
          const newErrors = { ...old }
          newErrors[fieldName] = validationErrors
          return newErrors
        })
      }
    }

    // TODO: send datas somewhere?
  }

  const validateField = (fieldName: string, value: string) => {
    let validationErrors: string[] = []

    // Don't validate 'eMoneyPin' and 'eMoneyId' if the choosen payment is not 'e-money'
    if (
      formDatas.payment !== 'e-money' &&
      (fieldName === 'eMoneyPin' || fieldName === 'eMoneyId')
    )
      return []

    if (
      fieldName === 'zip' ||
      fieldName === 'eMoneyPin' ||
      fieldName === 'eMoneyId'
    )
      validationErrors = validateNumber(value)
    else if (fieldName === 'tel') validationErrors = validateTel(value)
    else if (fieldName === 'email') validationErrors = validateEmail(value)
    else if (fieldName === 'payment')
      validationErrors = value.length !== 0 ? [] : ['Choose One']
    else validationErrors = validateText(value)

    return validationErrors
  }

  return (
    <div className="checkout container">
      <InnerNav />

      <form className="form-checkout">
        <div className="form-checkout__container">
          <h1 className="h1 h1--small text-black">Checkout</h1>
          <fieldset className="form-checkout__subsection">
            <legend className="form-checkout__subtitle">
              BILLINGS DETAILS
            </legend>
            <div className="form-checkout__controller form-checkout__controller--billing">
              <Input
                label="Name"
                name="name"
                type="text"
                id="name"
                currValue={formDatas.name}
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
                currValue={formDatas.email}
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
                currValue={formDatas.tel}
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
                currValue={formDatas.address}
                placeholder="1137 Williams Avenue"
                errorText={formErrors.address[0]}
                error={formErrors.address.length !== 0}
                onChangeHandler={(e) => inputHandler('address', e.target.value)}
              />
              <Input
                label="ZIP Code"
                name="zip"
                type="number"
                id="zip"
                currValue={formDatas.zip}
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
                currValue={formDatas.city}
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
                currValue={formDatas.country}
                placeholder="United States"
                errorText={formErrors.country[0]}
                error={formErrors.country.length !== 0}
                onChangeHandler={(e) => inputHandler('country', e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset className="form-checkout__subsection">
            <legend className="form-checkout__subtitle">PAYMENT DETAILS</legend>
            <div className="form-checkout__controller form-checkout__controller--payment">
              <div className="form-checkout__radio-controller">
                <p className="form-checkout__radio-title">Payment Method</p>
                <RadioInput
                  value="e-money"
                  label="e-Money"
                  name="payment"
                  currValue={formDatas.payment}
                  error={formErrors.payment.length !== 0}
                  onChangeHandler={(e) =>
                    inputHandler('payment', e.target.value)
                  }
                />
                <RadioInput
                  value="cash"
                  label="Cash on Delivery"
                  name="payment"
                  currValue={formDatas.payment}
                  error={formErrors.payment.length !== 0}
                  onChangeHandler={(e) =>
                    inputHandler('payment', e.target.value)
                  }
                />
              </div>
              {formDatas.payment === 'cash' && (
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

              {formDatas.payment === 'e-money' && (
                <>
                  <Input
                    label="e-Money Number"
                    name="eMoneyId"
                    type="number"
                    id="eMoneyId"
                    currValue={formDatas.eMoneyId}
                    placeholder="123456789"
                    errorText={formErrors.eMoneyId[0]}
                    error={formErrors.eMoneyId.length !== 0}
                    onChangeHandler={(e) =>
                      inputHandler('eMoneyId', e.target.value)
                    }
                  />

                  <Input
                    label="e-Money PIN"
                    name="eMoneyPin"
                    type="number"
                    id="eMoneyPin"
                    currValue={formDatas.eMoneyPin}
                    placeholder="1234"
                    errorText={formErrors.eMoneyPin[0]}
                    error={formErrors.eMoneyPin.length !== 0}
                    onChangeHandler={(e) =>
                      inputHandler('eMoneyPin', e.target.value)
                    }
                  />
                </>
              )}
            </div>
          </fieldset>
        </div>
        <div className="form-checkout__container form-checkout__container--summary">
          <fieldset className="form-checkout__summary">
            <legend className="form-checkout__summary-subtitle">SUMMARY</legend>
            <Summary />
            <Button
              text={
                formDatas.payment === 'e-money' ? 'Continue & Pay' : 'Continue'
              }
              level="primary"
              onClickHandler={handleSubmit}
            />
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export { Checkout }
