import { useRouter } from 'next/router'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { MapProps } from './types'

const MAPBOX_API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_API_ACCESS_TOKEN
const MAPBOX_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_USER_ID
const MAPBOX_STYLE_ID = process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID

const CustomTileLayer = () => {
  return MAPBOX_API_ACCESS_TOKEN ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER_ID}/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_ACCESS_TOKEN}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />

      {places?.map(({ id, slug, name, location: { latitude, longitude } }) => (
        <Marker
          position={[latitude, longitude]}
          title={name}
          key={`place-${id}`}
          eventHandlers={{
            click: () => {
              router.push(`/place/${slug}`)
            }
          }}
        />
      ))}
    </MapContainer>
  )
}

export default Map
