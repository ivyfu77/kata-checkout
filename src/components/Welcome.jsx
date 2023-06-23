import React from 'react'
import logo from '../logo.svg'

export const Welcome = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kata09: Back to Checkout
        </p>
        <a
          className="App-link"
          href="http://codekata.com/kata/kata09-back-to-the-checkout/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Because experience is the only&nbsp;teacher
        </a>
      </header>
    </div>
  )
}
