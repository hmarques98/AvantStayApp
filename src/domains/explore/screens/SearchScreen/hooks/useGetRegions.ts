import { useQuery } from '@apollo/client'
import {
  GroupedByStateName,
  Region,
  Regions,
} from '@services/api/graphql/models/Destination'
import { GET_REGIONS } from '@services/api/graphql/queries/Destination'
import { useStores } from '@services/store'
import { groupBy } from '@shared/utils/arrray/groupBy'

const useGetRegions = () => {
  const { destinationsStore } = useStores()
  const { addRegions } = destinationsStore

  const { loading, error, data } = useQuery<Regions>(GET_REGIONS, {
    onCompleted: ({ regions }) => {
      addRegions(
        groupBy<GroupedByStateName, keyof Region>(regions, 'stateName'),
      )
    },
  })

  return {
    loading,
    error,
    data,
  }
}

export default useGetRegions
