import React from 'react'
import classNames from 'classnames'

export const Section = ({ className = '', children }) => {
  return (
    <section className={classNames('kata-section', className)}>
      {children}
    </section>
  )
}
