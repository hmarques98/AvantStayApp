import { useQuery } from '@apollo/client'
import { HomesResult } from '@services/api/graphql/models/Destination'
import { HomesQueryRequest } from '@services/api/graphql/models/Queries'
import { GET_HOMES } from '@services/api/graphql/queries/Destination'
import { useStores } from '@services/store'

interface UseGetHomes {
  regionId: string
}
const useGetHomes = ({ regionId }: UseGetHomes) => {
  const { destinationsStore } = useStores()
  const { addHomes } = destinationsStore
  const { loading, error, data, refetch } = useQuery<
    HomesResult,
    HomesQueryRequest
  >(GET_HOMES, {
    variables: { region: regionId },
    onCompleted: ({ homes }) => {
      addHomes(homes.results)
    },
  })

  return {
    loading,
    error,
    data: data?.homes.results,
    refetch,
  }
}

export default useGetHomes
