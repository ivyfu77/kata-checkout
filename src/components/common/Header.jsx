import React from 'react'
import classNames from 'classnames'

/**
 * align?: 'left' | 'center' | 'right';
 * className?: string;
 * level: '1' | '2' | '3' | '4';
 * type: ['heading', 'sub-heading'];
 */

const headingLevel = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
}

export const Header = ({
  align = 'left',
  className = '',
  children,
  level = '1',
  type = 'heading',
}) => {
  const Tag = headingLevel[level]
  const alignment = align && `kata-align-${align}`

  return (
    <Tag
      className={classNames(`kata-text-${type}`, alignment, className)}
      role="heading"
      aria-level={Number(level)}
    >
      {children}
    </Tag>
  )
}
