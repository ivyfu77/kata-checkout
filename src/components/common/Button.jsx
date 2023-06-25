import React from 'react'
import classNames from 'classnames'

/**
 * variant?: 'do' | 'no' | 'go';
 * className?: string;
 */

export const Button = ({
  variant = 'do',
  className = '',
  disabled = false,
  children,
}) => {
  return (
    <button
      className={classNames('kata-btn', `kata-btn--${variant}`, className)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
