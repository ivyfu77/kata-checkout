import React, { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from 'react-router-dom'
import { Root } from './routes/root'
import { Welcome } from './components/Welcome'
import { Rules } from './components/rules/Rules'
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
            <Route path="checkout" element={<div>Check out</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {Object.keys(rules).map(key => (<div key={key}>{key} - {rules[key].price}</div>))}
    </>
  )
}
