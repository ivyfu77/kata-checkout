import React from 'react'

export const Rules = ({ source, onAdd }) => {
  const testRule = {
    item: 'E',
    price: 80,
    promo: {
      quantity: 1,
      specialPrice: 60,
    }
  }
  return (
    <>
      <div>Rules set up here</div>
      <button onClick={() => onAdd(testRule)}>Add New Rule</button>
      {Object.keys(source).map(key => (
        <p key={key}>
          {key} - ${source[key].price}
          {source[key].promo
            ? ` - ${source[key].promo.quantity} for ${source[key].promo.specialPrice}`
            : null
          }
        </p>
      ))}
    </>
  )
}
