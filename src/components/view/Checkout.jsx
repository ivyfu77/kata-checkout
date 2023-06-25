import React, { useState } from 'react'
import { Section, Header, Button } from '../common'
import { QuickKey } from './QuickKey'
import { total } from '../../utils/calculation'

export const Checkout = ({ rules }) => {
  const [lineItems, updateLineItems] = useState([])
  return (
    <>
      <Section>
        <Header>Checkout</Header>
      </Section>
      <Section>
        <Header type="sub-heading" level={2}>
          Quick Keys
        </Header>
        <div className="kata-quick-keys-container">
          {Object.keys(rules).map((key) => (
            <QuickKey
              key={key}
              item={key}
              onClick={() => {
                updateLineItems(lineItems.concat([key]))
              }}
            />
          ))}
        </div>
      </Section>
      <Section>
        <Header
          type="sub-heading"
          level={2}
          className="kata-checkout-list-header"
        >
          Checkout List
        </Header>
        {lineItems.length > 0 && <hr />}
        {lineItems.map((item, index) => (
          <div key={`item-${index}`}>{item}</div>
        ))}
        <hr />
        <div className="kata-checkout-list-bottom">
          <p>
            Total: <strong>{total(lineItems, rules)}</strong>
          </p>
          <Button
            variant="no"
            onClick={() => {
              updateLineItems([])
            }}
            disabled={lineItems.length === 0}
          >
            Clear
          </Button>
        </div>
      </Section>
    </>
  )
}
