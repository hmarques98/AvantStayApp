import {
  GroupedByStateName,
  Region,
} from '@services/api/graphql/models/Destination'
import { makeAutoObservable } from 'mobx'

export const ANY_DESTINATION = 'Any destination'

class DestinationStore {
  destination: Region = {
    name: ANY_DESTINATION,
  } as Region

  regions: GroupedByStateName = {} as GroupedByStateName

  searchInput = ''

  constructor() {
    makeAutoObservable(this)
  }

  toggleDestination = (destination: Region) => {
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

  addRegions = (regions: GroupedByStateName) => {
    this.regions = regions
  }
}

export default new DestinationStore()
