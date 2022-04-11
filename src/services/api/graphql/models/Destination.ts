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
