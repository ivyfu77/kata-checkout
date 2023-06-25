import React from 'react'

export const QuickKey = ({ item, onClick }) => {
  return (
    <div className="kata-quick-key" onClick={onClick}>
      <p>{item}</p>
    </div>
  )
}
