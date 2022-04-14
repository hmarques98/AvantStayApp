import { useQuery } from '@apollo/client'
import { HomeResult } from '@services/api/graphql/models/Destination'
import { HomeQueryRequest } from '@services/api/graphql/models/Queries'
import { GET_HOME } from '@services/api/graphql/queries/Destination'

interface UseGetHome {
  id: string
}
const useGetHome = ({ id }: UseGetHome) => {
  const { loading, error, data, refetch } = useQuery<
    HomeResult,
    HomeQueryRequest
  >(GET_HOME, {
    variables: { id: id },
  })

  return {
    loading,
    error,
    data: data?.home,
    refetch,
  }
}

export default useGetHome
