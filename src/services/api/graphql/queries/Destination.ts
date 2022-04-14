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
  {
    homes(guests: 2, order: PRICE_DESC, page: 1, pageSize: 10) {
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
