import { GroupedByStateName } from '@services/api/graphql/models/Destination'
import { makeAutoObservable } from 'mobx'

class DestinationStore {
  destinations: string[] = []

  regions: GroupedByStateName = {} as GroupedByStateName

  searchInput = ''

  constructor() {
    makeAutoObservable(this)
  }

  toggleDestinations = (destination: string) => {
    const destinationAlreadyAdded = this.destinations.some(
      destinationItem => destinationItem === destination,
    )
    if (destinationAlreadyAdded) {
      this.removeDestinationFromList(destination)
    } else this.addDestinationToList(destination)
  }

  selectAllByStateName = (stateName: string) => {
    const allFromState = this.regions[stateName].map(({ name }) => name)

    this.destinations = [...this.destinations, ...allFromState]
  }

  clearDestinations = () => {
    this.destinations = []
  }

  private addDestinationToList = (destination: string) => {
    this.destinations.push(destination)
  }

  private removeDestinationFromList = (destination: string) => {
    const updatedDestinations = this.destinations.filter(
      destinationValue => destinationValue !== destination,
    )

    this.destinations = updatedDestinations
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
