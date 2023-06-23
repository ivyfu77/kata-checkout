import { render, screen } from '@testing-library/react'
import { Welcome } from './components/Welcome'

test('renders CodeKata link', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/only teacher/i)
  expect(linkElement).toBeInTheDocument()
})
