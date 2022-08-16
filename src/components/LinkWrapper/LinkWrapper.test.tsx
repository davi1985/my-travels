import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children ', () => {
    render(<LinkWrapper href={'/my-link'}>Anything</LinkWrapper>)

    expect(
      screen.getByRole('link', {
        name: /anything/i
      })
    ).toHaveAttribute('href', '/my-link')
  })
})
