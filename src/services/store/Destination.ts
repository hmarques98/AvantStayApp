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

  destinationIndex = 0

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
    this.goToDestinationIndex(destination.stateName)
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

  clearDestinationIndex = () => {
    this.destinationIndex = 0
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

  private goToDestinationIndex = (stateName: string) => {
    const regionsKeysList = Object.keys(this.regionsGrouped)

    const index = regionsKeysList.indexOf(stateName)
    if (this.regionsKeys.length === regionsKeysList.length) {
      this.destinationIndex = index
    }
  }
}

export default new DestinationStore()
