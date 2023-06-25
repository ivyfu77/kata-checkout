import React from 'react'
import { Section, Header, Button } from '../common'

export const Rules = ({ source, onAdd }) => {
  const testRule = {
    item: 'E',
    price: 80,
    promo: {
      quantity: 1,
      specialPrice: 60,
    },
  }
  return (
    <>
      <Section>
        <Header>Set Rules</Header>
      </Section>
      <Section>
        <Button onClick={() => onAdd(testRule)} variant="do">
          Add Rule
        </Button>
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
