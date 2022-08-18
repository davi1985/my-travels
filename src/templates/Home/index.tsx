import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map/types'
import { NextSeo } from 'next-seo'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Travels"
        description="A simple projeto to shoe in map places that I went."
        canonical="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        openGraph={{
          url: 'https://my-travels.vercel.app',
          title: 'My Travels',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-travels.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Travels'
            }
          ],
          site_name: 'My Travels'
        }}
      />

      <LinkWrapper href="/about">
        <InfoOutline width={32} aria-label="About" />
      </LinkWrapper>

      <Map places={places} />
    </>
  )
}
