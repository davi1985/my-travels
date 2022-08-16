export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    logintude: number
  }
}

export type MapProps = {
  places?: Place[]
}
