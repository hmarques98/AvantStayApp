import { makeAutoObservable } from 'mobx'
import {
  BookingPeriod,
  GroupedByStateName,
  Home,
  Region,
} from '@services/api/graphql/models/Destination'
import { groupBy } from '@shared/utils/array/groupBy'
import { differenceInCalendarDays, format, parseISO } from 'date-fns'

export const ANY_DESTINATION = 'Any destination'

export const INITIAL_STATE_REGION_DESTINATION: Region = {
  id: '',
  name: ANY_DESTINATION,
  stateName: ANY_DESTINATION,
}

class DestinationStore {
  destination: Region = INITIAL_STATE_REGION_DESTINATION

  bookingPeriod: BookingPeriod = {
    checkIn: '',
    checkOut: '',
  }

  private regions: Region[] = []

  private homes: Home[] = []

  searchInput = ''

  destinationIndex = 0

  constructor() {
    makeAutoObservable(this)
  }

  addRegions = (regions: Region[]) => {
    this.regions = regions
  }

  toggleDestination = (destination: Region) => {
    this.searchInput = ''

    if (this.destination.id !== destination.id) {
      this.destination = destination
      this.scrollToDestinationStateIndex(destination.stateName)
    } else {
      this.destination = INITIAL_STATE_REGION_DESTINATION
      this.scrollToDestinationStateIndex(ANY_DESTINATION)
    }
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

  get statesGrouped() {
    return groupBy<GroupedByStateName, keyof Region>(
      this.regionsFilteredByTypedText(),
      'stateName',
    )
  }

  get statesGroupedKeys() {
    return Object.keys(this.statesGrouped)
  }

  get statesKeys() {
    return Object.keys(
      groupBy<GroupedByStateName, keyof Region>(this.regions, 'stateName'),
    )
  }

  private scrollToDestinationStateIndex = (stateName: string) => {
    const statesKeysList = Object.keys(this.statesGrouped)

    if (this.statesKeys.length === statesKeysList.length) {
      this.destinationIndex = statesKeysList.indexOf(stateName)
    }
  }

  clearAllDestinations = () => {
    this.destination = INITIAL_STATE_REGION_DESTINATION
    this.destinationIndex = 0
  }

  clearDestinationIndex = () => {
    this.destinationIndex = 0
  }

  setSearchInput = (value: string) => {
    this.searchInput = value
  }

  clearSearchInput = () => {
    this.searchInput = ''
  }

  addHomes = (homes: Home[]) => {
    this.homes = homes
  }

  get getHomesListSize() {
    return this.homes.length
  }

  handleBookingPeriod = (bookingPeriodDates: BookingPeriod) => {
    this.bookingPeriod = bookingPeriodDates
  }

  get formattedSelectedBookingPeriod() {
    if (Object.values(this.bookingPeriod).every(item => item))
      return `${format(
        new Date(parseISO(this.bookingPeriod.checkIn)),
        'EE, dd MMM',
      )} -  ${format(
        new Date(parseISO(this.bookingPeriod.checkOut)),
        'EE, dd MMM, yyyy',
      )}`
  }

  get quantityOfDaysSimulateBook() {
    if (Object.values(this.bookingPeriod).every(item => item)) {
      const days = differenceInCalendarDays(
        new Date(this.bookingPeriod.checkOut),
        new Date(this.bookingPeriod.checkIn),
      )

      return days + 1
    }

    return 0
  }
}

export default new DestinationStore()
