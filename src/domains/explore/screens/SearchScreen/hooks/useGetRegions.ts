import { useQuery } from '@apollo/client'
import { Regions } from '@services/api/graphql/models/Destination'
import { GET_REGIONS } from '@services/api/graphql/queries/Destination'
import { useStores } from '@services/store'

const useGetRegions = () => {
  const { destinationsStore } = useStores()
  const { addRegions } = destinationsStore

  const { loading, error, data } = useQuery<Regions>(GET_REGIONS, {
    onCompleted: ({ regions }) => {
      addRegions(regions)
      // groupBy<GroupedByStateName, keyof Region>(regions, 'stateName')
    },
  })

  return {
    loading,
    error,
    data,
  }
}

export default useGetRegions
