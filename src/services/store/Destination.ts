import { makeAutoObservable } from 'mobx'
import {
  GroupedByStateName,
  Home,
  Region,
} from '@services/api/graphql/models/Destination'
import { groupBy } from '@shared/utils/arrray/groupBy'

export const ANY_DESTINATION = 'Any destination'
export const INITIAL_STATE_DESTINATION: Region = {
  id: '0',
  name: ANY_DESTINATION,
  stateName: ANY_DESTINATION,
}

class DestinationStore {
  destination: Region = INITIAL_STATE_DESTINATION

  private regions: Region[] = []

  private homes: Home[] = []

  searchInput = ''

  destinationIndex = 0

  constructor() {
    makeAutoObservable(this)
  }

  clearDestinationIndex = () => {
    this.destinationIndex = 0
  }

  toggleDestination = (destination: Region) => {
    this.searchInput = ''
    if (this.destination.id === destination.id)
      return (this.destination = INITIAL_STATE_DESTINATION)
    this.destination = destination
    this.scrollToDestinationStateIndex(destination.stateName)
  }

  clearAllDestinations = () => {
    this.destination = INITIAL_STATE_DESTINATION
    this.destinationIndex = 0
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

  addHomes = (homes: Home[]) => {
    this.homes = homes
  }

  get getHomesListSize() {
    return this.homes.length
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

  get regionsGroupedKeys() {
    return Object.keys(this.regionsGrouped)
  }

  get regionsKeys() {
    return Object.keys(
      groupBy<GroupedByStateName, keyof Region>(this.regions, 'stateName'),
    )
  }

  private scrollToDestinationStateIndex = (stateName: string) => {
    const regionsKeysList = Object.keys(this.regionsGrouped)

    const index = regionsKeysList.indexOf(stateName)
    if (this.regionsKeys.length === regionsKeysList.length) {
      this.destinationIndex = index
    }
  }
}

export default new DestinationStore()
