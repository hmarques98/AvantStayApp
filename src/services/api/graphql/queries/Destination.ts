import { gql } from '@apollo/client'

export const GET_REGIONS = gql`
  {
    regions {
      id
      name
      stateName
    }
  }
`

export const GET_HOMES = gql`
  query GetHomes($region: UUID) {
    homes(region: $region) {
      results {
        id
        title
        photos {
          listOrder
          url
        }
        bathroomsCount
        hasPool
        bedsCount
        regionName
        stateCode
        cityName
        maxOccupancy
      }
    }
  }
`
