import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { MapProps } from './types'

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location: { latitude, logintude } }) => (
        <Marker
          position={[latitude, logintude]}
          title={name}
          key={`place-${id}`}
        />
      ))}
    </MapContainer>
  )
}

export default Map
