import React from 'react'

export const Checkout = ({ rules }) => {
  return (
    <div>
      {Object.keys(rules).map(key => (
        <p key={key}>
          {key} - ${rules[key].price}
          {rules[key].promo
            ? ` - ${rules[key].promo.quantity} for ${rules[key].promo.specialPrice}`
            : null
          }
        </p>
      ))}
    </div>
  )
}
