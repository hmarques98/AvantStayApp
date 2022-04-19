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
  query GetHomes($region: UUID, $bookingPeriod: BookingPeriod) {
    homes(region: $region, period: $bookingPeriod) {
      results {
        id
        title
        photos {
          url
        }
        bathroomsCount
        hasPool
        bedsCount
        regionName
        stateCode
        cityName
        maxOccupancy
        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
        }
      }
    }
  }
`
export const GET_HOME = gql`
  query GetHome($id: UUID!) {
    home(id: $id) {
      title
      description
      amenities
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
