import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'
import { Body, Content, Heading } from './styles'

const AboutTemplate = () => (
  <Content>
    <LinkWrapper href="/">
      <CloseOutline width={32} />
    </LinkWrapper>

    <Heading>My Travels</Heading>

    <Body>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum
        commodi voluptate numquam necessitatibus impedit nobis consequuntur
        temporibus? Excepturi modi amet cumque non iste. Dicta voluptas aut
        deserunt amet molestias.
      </p>
    </Body>
  </Content>
)

export default AboutTemplate
