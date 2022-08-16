import Link from 'next/link'
import { Wrapper } from './styles'
import { LinkWrapperProps } from './types'

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <Wrapper>
    <Link href={href}>{children}</Link>
  </Wrapper>
)

export default LinkWrapper
