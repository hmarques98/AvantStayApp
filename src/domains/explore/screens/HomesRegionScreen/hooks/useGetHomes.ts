import { useQuery } from '@apollo/client'
import { Homes } from '@services/api/graphql/models/Destination'
import { GET_HOMES } from '@services/api/graphql/queries/Destination'

const useGetHomes = () => {
  const { loading, error, data } = useQuery<Homes>(GET_HOMES)

  return {
    loading,
    error,
    data: data?.homes.results,
  }
}

export default useGetHomes
