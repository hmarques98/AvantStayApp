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
export const GET_HOME = gql`
  query GetHome($id: UUID!) {
    home(id: $id) {
      title
      description
      bathroomsCount
      stateName
      cityName
      regionName
      seasonPricing {
        highSeason {
          minPrice
          maxPrice
        }
      }
      photos {
        url
      }
      hasPool
      bedsCount
      stateCode
      maxOccupancy
    }
  }
`
