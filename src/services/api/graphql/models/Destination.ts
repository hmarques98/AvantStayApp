export interface RegionsResponse {
  data: Regions
}

export interface Regions {
  regions: Region[]
}

export interface Region {
  id: string
  name: string
  stateName: string
}

export interface Regions {
  groupedByStateName: GroupedByStateName
}

export interface GroupedByStateName {
  [key: string]: Region[]
}

export enum Typename {
  Region = 'Region',
}

export interface HomesResult {
  homes: {
    results: Home[]
  }
}

export interface HomeResult {
  home: Home
}

interface Photo {
  listOrder: number
  url: string
}

export interface Home {
  stateName: string
  photos: Photo[]
  seasonPricing: SeasonPricing
  id: string
  title: string
  description: string
  cityName: string
  bathroomsCount: number
  roomsCount: number
  bedsCount: number
  hasPool: boolean
  regionName: string
  stateCode: string
  maxOccupancy: number
  amenities: string[]
}

export interface SeasonPricing {
  highSeason: HighSeason
}

export interface HighSeason {
  minPrice: number
  maxPrice: number
}
