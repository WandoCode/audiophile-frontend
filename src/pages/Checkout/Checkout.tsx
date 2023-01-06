import { Button, Input, RadioInput } from '../../stories/Atoms'
import { useState } from 'react'
import CashImg from '../../assets/icon-cash-on-delivery.svg'
import { InnerNav } from '../../stories/Molecules'

function Checkout() {
  const [formDatas, setFormDatas] = useState({
    name: '',
    email: '',
    tel: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    tel: false,
    address: false,
    zip: false,
    country: false,
    city: false,
    payment: false,
  })

  return (
    <div className="checkout container">
      <InnerNav />

      <form className="form-checkout">
        <h1 className="h1 text-black">Checkout</h1>
        <fieldset className="form-checkout__subsection">
          <legend className="form-checkout__subtitle">Billing details</legend>
          <Input
            label="Name"
            name="name"
            type="text"
            id="name"
            currValue={formDatas.name}
            placeholder="Alexei"
            errorText="Field required"
            error={formErrors.name}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, name: e.target.value })
            }
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            id="email"
            currValue={formDatas.email}
            placeholder="alexei@gmail.com"
            errorText="Wrong format"
            error={formErrors.email}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, email: e.target.value })
            }
          />
          <Input
            label="Phone Number"
            name="tel"
            type="tel"
            id="tel"
            currValue={formDatas.tel}
            placeholder="+1 (202) 555-0136"
            errorText="Wrong format"
            error={formErrors.tel}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, tel: e.target.value })
            }
          />
        </fieldset>
        <fieldset className="form-checkout__subsection">
          <legend className="form-checkout__subtitle">Shipping info</legend>
          <Input
            label="Address"
            name="address"
            type="text"
            id="address"
            currValue={formDatas.address}
            placeholder="1137 Williams Avenue"
            errorText="Field required"
            error={formErrors.address}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, address: e.target.value })
            }
          />
          <Input
            label="ZIP Code"
            name="zip"
            type="number"
            id="zip"
            currValue={formDatas.zip}
            placeholder="101010"
            errorText="Field required"
            error={formErrors.zip}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, zip: e.target.value })
            }
          />
          <Input
            label="City"
            name="city"
            type="text"
            id="city"
            currValue={formDatas.city}
            placeholder="New York"
            errorText="Field required"
            error={formErrors.city}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, city: e.target.value })
            }
          />
          <Input
            label="Country"
            name="country"
            type="text"
            id="country"
            currValue={formDatas.country}
            placeholder="United States"
            errorText="Field required"
            error={formErrors.country}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, country: e.target.value })
            }
          />
        </fieldset>
        <fieldset className="form-checkout__subsection">
          <legend className="form-checkout__subtitle">Payment details</legend>
          <p className="form-checkout__radio-title">Payment Method</p>
          <RadioInput
            value="e-money"
            label="e-Money"
            name="payment"
            currValue={formDatas.payment}
            error={formErrors.payment}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, payment: e.target.value })
            }
          />
          <RadioInput
            value="cash"
            label="Cash on Delivery"
            name="payment"
            currValue={formDatas.payment}
            error={formErrors.payment}
            onChangeHandler={(e) =>
              setFormDatas({ ...formDatas, payment: e.target.value })
            }
          />
          <div className="form-checkout__payment-details">
            <img src={CashImg} alt="" />
            <p className="form-checkout__text">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </fieldset>
        <fieldset className="checkout__summary">
          <legend className="form-checkout__summary-subtitle">Summary</legend>
          <Button text="Checkout" level="primary" onClickHandler={() => {}} />
        </fieldset>
      </form>
    </div>
  )
}

export { Checkout }
