import React from 'react'
import { Section, Header } from '../common'

export const Checkout = ({ rules }) => {
  return (
    <>
      <Section>
        <Header>Checkout</Header>
      </Section>
      <Section>
        {Object.keys(rules).map((key) => (
          <p key={key}>
            {key} - ${rules[key].price}
            {rules[key].promo
              ? ` - ${rules[key].promo.quantity} for ${rules[key].promo.specialPrice}`
              : null}
          </p>
        ))}
      </Section>
    </>
  )
}
