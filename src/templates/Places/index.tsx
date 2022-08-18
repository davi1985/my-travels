import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { Wrapper, Container, Heading, Body, Gallery } from './styles'
import { useRouter } from 'next/router'
import { PlaceTemplateProps } from './types'

import { NextSeo } from 'next-seo'

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://my-travels.vercel.app"
        openGraph={{
          url: 'https://my-travels.vercel.app',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline width={32} aria-label="Go back to map" />
      </LinkWrapper>

      <Wrapper>
        <Container>
          <Heading>{place.name}</Heading>

          <Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <Gallery>
            {place.gallery.map((image, index) => (
              <Image
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  )
}
