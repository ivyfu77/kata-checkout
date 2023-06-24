import { scan, total, stringToLineItems } from '../utils/calculation'
import { INITIAL_RULES } from '../data/initialRules'

test('test_totals', () => {
  expect(total(stringToLineItems('', INITIAL_RULES), INITIAL_RULES)).toEqual(0)
  expect(total(stringToLineItems('A', INITIAL_RULES), INITIAL_RULES)).toEqual(50)
  expect(total(stringToLineItems('AB', INITIAL_RULES), INITIAL_RULES)).toEqual(80)
  expect(total(stringToLineItems('CDBA', INITIAL_RULES), INITIAL_RULES)).toEqual(115)

  expect(total(stringToLineItems('AA', INITIAL_RULES), INITIAL_RULES)).toEqual(100)
  expect(total(stringToLineItems('AAA', INITIAL_RULES), INITIAL_RULES)).toEqual(130)
  expect(total(stringToLineItems('AAAA', INITIAL_RULES), INITIAL_RULES)).toEqual(180)
  expect(total(stringToLineItems('AAAAA', INITIAL_RULES), INITIAL_RULES)).toEqual(230)
  expect(total(stringToLineItems('AAAAAA', INITIAL_RULES), INITIAL_RULES)).toEqual(260)

  expect(total(stringToLineItems('AAAB', INITIAL_RULES), INITIAL_RULES)).toEqual(160)
  expect(total(stringToLineItems('AAABB', INITIAL_RULES), INITIAL_RULES)).toEqual(175)
  expect(total(stringToLineItems('AAABBD', INITIAL_RULES), INITIAL_RULES)).toEqual(190)
  expect(total(stringToLineItems('DABABA', INITIAL_RULES), INITIAL_RULES)).toEqual(190)
})

test('test_incremental', () => {
  const lineItems = []
  expect(scan('A', lineItems, INITIAL_RULES)).toEqual(50)
  expect(scan('B', lineItems, INITIAL_RULES)).toEqual(80)
  expect(scan('A', lineItems, INITIAL_RULES)).toEqual(130)
  expect(scan('A', lineItems, INITIAL_RULES)).toEqual(160)
  expect(scan('B', lineItems, INITIAL_RULES)).toEqual(175)
})
