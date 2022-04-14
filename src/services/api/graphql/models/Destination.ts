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

export interface Homes {
  homes: {
    results: HomesResult[]
  }
}

export interface HomesResult {
  id: string
  title: string
  cityName: string
  photos: HomesPhoto[]
  bathroomsCount: number
  roomsCount: number
  bedsCount: number
  hasPool: boolean
  regionName: string
  stateCode: string
  maxOccupancy: number
}

interface HomesPhoto {
  listOrder: 0
  url: string
}
