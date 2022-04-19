import { useQuery } from '@apollo/client'
import {
  BookingPeriod,
  HomesResult,
} from '@services/api/graphql/models/Destination'
import { HomesQueryRequest } from '@services/api/graphql/models/Queries'
import { GET_HOMES } from '@services/api/graphql/queries/Destination'
import { useStores } from '@services/store'

interface UseGetHomes {
  regionId: string
  bookingPeriod: BookingPeriod
}
const useGetHomes = ({ regionId, bookingPeriod }: UseGetHomes) => {
  const { destinationStore } = useStores()
  const { addHomes } = destinationStore

  const { loading, error, data, refetch } = useQuery<
    HomesResult,
    HomesQueryRequest
  >(GET_HOMES, {
    variables: { region: regionId, bookingPeriod },
    onCompleted: ({ homes }) => {
      addHomes(homes.results)
    },
    notifyOnNetworkStatusChange: true,
  })

  return {
    loading,
    error,
    data: data?.homes.results,
    refetch,
  }
}

export default useGetHomes
