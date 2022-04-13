import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'

import { Region } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import { ANY_DESTINATION } from '@services/store/Destination'

import Button from '@shared-components/Button'
import Divider from '@shared-components/Divider'
import Icon from '@shared-components/Icon'

import Header from './components/Header'
import SearchItem from './components/SearchItem'
import SectionListItem from './components/SectionListItem'
import SelectItem from './components/SelectItem'
import useGetRegions from './hooks/useGetRegions'
import styles from './styles'

const SearchScreen = () => {
  const navigation = useNavigation()
  const { destinationsStore } = useStores()
  const {
    setSearchInput,
    searchInput,
    clearSearchInput,
    regionsGroupedKeys,
    destination,
    destinationIndex,
    clearDestinationIndex,
  } = destinationsStore

  const statesNames = regionsGroupedKeys
  const { loading, error, data } = useGetRegions()

  const listRef = React.useRef<FlatList>(null)
  const firstLoad = React.useRef(true)

  const regionsSize = data?.regions.length

  const regionSizeList = data?.regions.filter(
    ({ stateName }) => stateName === destination.stateName,
  ).length

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', () => {
        clearDestinationIndex()
      }),
    [clearDestinationIndex, navigation],
  )

  React.useEffect(() => {
    firstLoad.current = false
    if (!searchInput && destinationIndex !== 0) {
      firstLoad.current = true
      if (firstLoad.current) {
        const viewOffset =
          Number(regionsSize) / Number(regionSizeList) + Number(regionsSize)

        setTimeout(() =>
          listRef.current?.scrollToIndex({
            index: destinationIndex,
            animated: true,
            viewOffset: -Number(viewOffset),
          }),
        )
      }
    }
  }, [destinationIndex, regionSizeList, regionsSize, searchInput])

  if (loading)
    return (
      <View style={styles.containerLogoLoading}>
        <Icon icon="logoVowel" />
      </View>
    )
  if (error)
    return (
      <View style={styles.containerError}>
        <Text>Something was wrong</Text>
      </View>
    )

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SearchItem
        onChangeText={setSearchInput}
        value={searchInput}
        onPressCloseXIcon={clearSearchInput}
      />

      <Divider />

      <FlatList
        bounces={false}
        ref={listRef}
        data={statesNames}
        ListHeaderComponentStyle={styles.listHeaderComponent}
        ListHeaderComponent={() => {
          return (
            <>
              {!searchInput && (
                <SelectItem region={{ name: ANY_DESTINATION } as Region} />
              )}
            </>
          )
        }}
        style={{ marginVertical: 18 }}
        keyExtractor={stateName => stateName}
        renderItem={({ item }) => {
          return <SectionListItem stateName={item} key={item} />
        }}
      />

      <Button title="Search" variant="primaryFilled" onPress={() => {}} />
    </SafeAreaView>
  )
}
export default observer(SearchScreen)
