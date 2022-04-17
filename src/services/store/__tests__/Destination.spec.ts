import { Home, Region } from '@services/api/graphql/models/Destination'
import DestinationStore, {
  INITIAL_STATE_REGION_DESTINATION,
} from '../Destination'

const mockRegion: Region = { id: '03', name: 'Bend', stateName: 'Oregon' }

const mockRegions: Region[] = [
  { id: '01', name: 'Sonoma', stateName: 'California' },
  { id: '02', name: 'Nashville', stateName: 'Tennessee' },
  { id: '03', name: 'Bend', stateName: 'Oregon' },
  { id: '04', name: 'San Diego', stateName: 'California' },
]

const mockHomes: Partial<Home>[] = [
  {
    title: 'Cherokee 6',
    bathroomsCount: 3,
    stateName: 'Tennessee',
    cityName: 'Nashville',
    regionName: 'Nashville',
    photos: [
      {
        url: 'https://imglite.avantstay.com/homes/e3564121-51c1-11ea-aff7-8938a92c93c1/images/original_156505596.jpeg',
      },
    ],

    amenities: ['TV', 'WiFi'],
  },
  {
    title: 'Cherokee 4',
    bathroomsCount: 3,
    stateName: 'Tennessee',
    cityName: 'Nashville',
    regionName: 'Nashville',
    photos: [
      {
        url: 'https://imglite.avantstay.com/homes/e3564121-51c1-11ea-aff7-8938a92c93c1/images/original_156505596.jpeg',
      },
    ],

    amenities: ['Highchair', 'Internet Access'],
  },
]

const setup = () => {
  return DestinationStore
}

beforeEach(() => {
  const store = setup()
  store.toggleDestination(INITIAL_STATE_REGION_DESTINATION)
})

describe('DestinationStore', () => {
  it('WHEN call addRegions SHOULD add Regions to regions list', () => {
    const store = setup()
    store.addRegions(mockRegions)

    expect(store.statesGroupedKeys.length).toBe(3)
    expect(store.statesGrouped.California.length).toBe(2)
    expect(store.statesKeys.length).toBe(3)
  })

  it('WHEN call toggleDestination  SHOULD handle region destination', () => {
    const store = setup()
    store.toggleDestination(mockRegion)
    expect(store.destination).toStrictEqual(mockRegion)
  })

  it('WHEN call setSearchInput SHOULD handle searchInput', () => {
    const store = setup()
    const searchInputValue = 'City Fake'

    store.setSearchInput(searchInputValue)
    expect(store.searchInput).toBe(searchInputValue)

    store.clearSearchInput()
    expect(store.searchInput).toBe('')
  })

  it('WHEN searchInput is not empty AND is handled a region destination SHOULD clean searchInput', () => {
    const store = setup()
    store.setSearchInput('City Fake')
    store.toggleDestination(mockRegion)
    expect(store.destination).toStrictEqual(mockRegion)
    expect(store.searchInput).toBe('')
  })

  it('WHEN there is destination AND call clearAllDestinations SHOULD clear region destination and destinationIndex TO BE 0', () => {
    const store = setup()

    store.addRegions(mockRegions)

    store.toggleDestination(mockRegion)
    expect(store.destination).toStrictEqual(mockRegion)
    expect(store.destinationIndex).toBe(2)

    store.clearAllDestinations()
    expect(store.destination).toStrictEqual(INITIAL_STATE_REGION_DESTINATION)
    expect(store.destinationIndex).toBe(0)
  })

  it('WHEN toggle destination SHOULD handle scrollToDestinationStateIndex', () => {
    const store = setup()
    store.addRegions(mockRegions)
    expect(store.statesGroupedKeys.length).toBe(3)
    expect(store.statesKeys.length).toBe(3)

    store.toggleDestination(mockRegions[2])
    expect(store.destination).toStrictEqual(mockRegions[2])
    expect(store.destinationIndex).toBe(2)
  })

  it('WHEN call addHomes SHOULD be added a list of Homes to homes state', () => {
    const store = setup()

    store.addHomes(mockHomes as Home[])
    expect(store.getHomesListSize).toBe(2)
  })
})
