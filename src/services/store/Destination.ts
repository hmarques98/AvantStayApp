import { makeAutoObservable } from 'mobx'

class DestinationStore {
  destinations: string[] = []

  searchInput = ''

  constructor() {
    makeAutoObservable(this)
  }

  add = (destination: string) => {
    this.destinations.push(destination)
  }

  setSearchInput = (value: string) => {
    this.searchInput = value
  }

  clearSearchInput = () => {
    this.searchInput = ''
  }
}

export default new DestinationStore()
