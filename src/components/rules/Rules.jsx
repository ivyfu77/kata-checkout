import React from 'react'

export const Rules = ({ source, onAdd }) => {
  const priceA = source['A'].price
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
      <div>Item A's price is {priceA}</div>
      <button onClick={() => onAdd(testRule)}>Add New Rule</button>
    </>
  )
}
