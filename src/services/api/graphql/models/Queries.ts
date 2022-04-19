import { BookingPeriod } from './Destination'

export type HomesQueryRequest = {
  region: string
  bookingPeriod: BookingPeriod
}

export type HomeQueryRequest = {
  id: string
}
