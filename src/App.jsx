import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { Welcome } from './components/Welcome'
import { Rules } from './components/view/Rules'
import { Checkout } from './components/view/Checkout'
import { INITIAL_RULES } from './data/initialRules'


export const App = () => {
  const [rules, setRules] = useState(INITIAL_RULES)
  const handleAddRule = (rule) => {
    const newRules = structuredClone(rules)
    newRules[rule.item] = { price: rule.price, promo: rule.promo }
    setRules(newRules)
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route
              path="/"
              element={<Welcome />}
            />
            <Route
              path="rules"
              element={<Rules source={rules} onAdd={(rule) => handleAddRule(rule)} />}
            />
            <Route path="checkout" element={<Checkout rules={rules} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
