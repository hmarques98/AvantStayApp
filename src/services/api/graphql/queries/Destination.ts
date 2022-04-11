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
