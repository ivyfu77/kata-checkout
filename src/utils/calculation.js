/**
 *
 * @param {string} item
 * @param {Array} lineItems
 * @param {Object} rules
 *
 * @return total and updated lineItems
 */
export const scan = (item, lineItems, rules) => {
  if (!item || !rules[item]) { // or item is not in rules
    return total(lineItems, rules)
  }
  lineItems.push(item)
  return total(lineItems, rules)
}

// calculate total price of current lineItems
export const total = (lineItems, rules) => {
  const specialPriceItems = {} // eg: {'A': 2, 'B': 1}
  let total = 0

  // Calculate normal items' total and get the special items' group
  lineItems.forEach(item => {
    if (rules[item]?.promo) {
      if (specialPriceItems[item]) {
        ++specialPriceItems[item]
      } else {
        specialPriceItems[item] = 1
      }
    } else {
      total = total + rules[item].price
    }
  })

  // Calculate special items' total
  Object.keys(specialPriceItems).forEach(key => {
    const quantity = specialPriceItems[key] || 0
    if (quantity > 0) {
      const remQuantity = quantity % rules[key].promo.quantity
      const specialQuantity = parseInt(quantity/rules[key].promo.quantity)
      total += remQuantity * rules[key].price + specialQuantity * rules[key].promo.specialPrice
    }
  })
  return total
}

export const stringToLineItems = (str, rules) => {
  const lineItems = [...str]
  return lineItems.filter(item => rules[item])
}
