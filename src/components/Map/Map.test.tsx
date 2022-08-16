import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Icapuí',
        slug: 'icapui',
        location: {
          latitude: 0,
          logintude: 0
        }
      },
      {
        id: '2',
        name: 'Reykjavik',
        slug: 'reykjavik',
        location: {
          latitude: 129,
          logintude: -50
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/icapuí/i)).toBeInTheDocument()
    expect(screen.getByTitle(/reykjavik/i)).toBeInTheDocument()
  })
})
