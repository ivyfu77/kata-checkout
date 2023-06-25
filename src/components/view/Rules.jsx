import React from 'react'
import { Section, Header, Button } from '../common'

const clearInput = (target) => {
  target.item.value = ''
  target.price.value = ''
  target.quantity.value = ''
  target.specialPrice.value = ''
}

export const Rules = ({ source, onAdd }) => {
  // rule example {
  //   item: 'E',
  //   price: 80,
  //   promo: {
  //     quantity: 1,
  //     specialPrice: 60,
  //   },
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const item = event.target.item.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value
    const specialPrice = event.target.specialPrice.value
    if (quantity && specialPrice) {
      onAdd({
        item,
        price,
        promo: {
          quantity,
          specialPrice,
        }
      })
    } else {
      onAdd({
        item,
        price,
      })
    }
    clearInput(event.target)
  }

  return (
    <>
      <Section>
        <Header>Set Rules</Header>
      </Section>
      <Section className="kata-action-bar">
        <form className='kata-rules-set-container' onSubmit={(e) => handleSubmit(e)}>
          <div className='kata-rules-set-unit'>
            <label>Item</label>
            <input type='text' name='item' required />
          </div>
          <div className='kata-rules-set-unit'>
            <label>Price</label>
            <input type='number' min={0} name='price' required />
          </div>
          <div className='kata-rules-set-unit'>
            <label>Promo (Optional)</label>
            <div>
              <input type='number' min={1} name='quantity' />{' '}
              <span>For</span>{' '}
              <input type='number' min={0} name='specialPrice' />
            </div>
          </div>
          <Button type="submit" variant="do">
            Add Rule
          </Button>
        </form>
      </Section>
      <Section>
        <hr />
        {Object.keys(source).map((key) => (
          <p key={key}>
            {key} - ${source[key].price}
            {source[key].promo
              ? ` - ${source[key].promo.quantity} for ${source[key].promo.specialPrice}`
              : null}
          </p>
        ))}
      </Section>
    </>
  )
}
