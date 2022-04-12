import {
  GroupedByStateName,
  Region,
} from '@services/api/graphql/models/Destination'
import { groupBy } from '@shared/utils/arrray/groupBy'
import { makeAutoObservable } from 'mobx'

export const ANY_DESTINATION = 'Any destination'

class DestinationStore {
  destination: Region = {
    name: ANY_DESTINATION,
  } as Region

  private regions: Region[] = []

  searchInput = ''

  constructor() {
    makeAutoObservable(this)
  }

  toggleDestination = (destination: Region) => {
    this.searchInput = ''
    if (this.destination.id === destination.id)
      return (this.destination = {
        name: ANY_DESTINATION,
      } as Region)
    this.destination = destination
  }

  clearAllDestinations = () => {
    this.destination = {
      name: ANY_DESTINATION,
    } as Region
  }

  setSearchInput = (value: string) => {
    this.searchInput = value
  }

  clearSearchInput = () => {
    this.searchInput = ''
  }

  addRegions = (regions: Region[]) => {
    this.regions = regions
  }

  private regionsFilteredByTypedText() {
    if (this.searchInput)
      return this.regions.filter(
        ({ name, stateName }) =>
          stateName.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          name.toLowerCase().includes(this.searchInput.toLowerCase()),
      )

    return this.regions
  }

  get regionsGrouped() {
    return groupBy<GroupedByStateName, keyof Region>(
      this.regionsFilteredByTypedText(),
      'stateName',
    )
  }
}

export default new DestinationStore()
