import { Input, RadioInput } from '../../stories/Atoms'
import CashImg from '../../assets/icon-cash-on-delivery.svg'
import { FormErrors, FormDatas } from '../../types/index'

interface Props {
  formDatas: FormDatas
  formErrors: FormErrors
  onHandleInput: (fieldName: string, value: string) => void
}

function CheckoutInputs({ formDatas, onHandleInput, formErrors }: Props) {
  return (
    <>
      <fieldset className="form-checkout__subsection">
        <h2 className="visually-hidden">Checkout form</h2>
        <legend className="form-checkout__subtitle">BILLINGS DETAILS</legend>
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
            onChangeHandler={(e) => onHandleInput('name', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('email', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('tel', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('address', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('zip', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('city', e.target.value)}
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
            onChangeHandler={(e) => onHandleInput('country', e.target.value)}
          />
        </div>
      </fieldset>

      <fieldset className="form-checkout__subsection">
        <legend className="form-checkout__subtitle">PAYMENT DETAILS</legend>
        <div className="form-checkout__controller form-checkout__controller--payment">
          <div className="form-checkout__radio-controller">
            <p className="form-checkout__radio-title">Payment Method</p>
            <RadioInput
              value="stripe"
              label="Card/Bancontact"
              name="payment"
              currValue={formDatas.payment.value}
              error={formErrors.payment.length !== 0}
              onChangeHandler={(e) => onHandleInput('payment', e.target.value)}
            />

            <RadioInput
              value="cash"
              label="Cash on Delivery"
              name="payment"
              currValue={formDatas.payment.value}
              error={formErrors.payment.length !== 0}
              onChangeHandler={(e) => onHandleInput('payment', e.target.value)}
            />
          </div>
          {formDatas.payment.value === 'stripe' && (
            <div className="form-checkout__payment-details">
              <img src={CashImg} alt="" />
              <p className="form-checkout__text">
                The 'Card/Bancontact' option offer a large choice of payment
                facilities: Bancontact, Visa, MasterCard, etc. The payment will
                be processed by Stripe.
              </p>
            </div>
          )}
          {formDatas.payment.value === 'cash' && (
            <div className="form-checkout__payment-details">
              <img src={CashImg} alt="" />
              <p className="form-checkout__text">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </fieldset>
    </>
  )
}

export default CheckoutInputs
