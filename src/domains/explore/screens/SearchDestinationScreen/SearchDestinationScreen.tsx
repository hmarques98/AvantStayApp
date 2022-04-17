import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'

import { useStores } from '@services/store'
import {
  ANY_DESTINATION,
  INITIAL_STATE_REGION_DESTINATION,
} from '@services/store/Destination'

import Button from '@shared-components/Button'
import Icon from '@shared-components/Icon'

import SearchField from './components/SearchField'
import SectionListItem from './components/SectionListItem'
import SelectItem from './components/SelectItem'
import useGetRegions from './hooks/useGetRegions'
import styles from './styles'

const SearchDestinationScreen = () => {
  const navigation = useNavigation()
  const { destinationStore } = useStores()
  const {
    setSearchInput,
    searchInput,
    clearSearchInput,
    statesGroupedKeys,
    destination,
    destinationIndex,
    clearDestinationIndex,
    clearAllDestinations,
  } = destinationStore

  const listRef = React.useRef<FlatList>(null)
  const searchItemInputRef = React.useRef<TextInput>(null)

  const { loading, error, data } = useGetRegions()

  const regionsSize = React.useMemo(
    () => (data?.regions ? data?.regions.length : 0),
    [data?.regions],
  )

  const regionSizeByStateName = React.useMemo(
    () =>
      data?.regions
        ? data?.regions.filter(
            ({ stateName }) => stateName === destination.stateName,
          ).length
        : 0,
    [data?.regions, destination.stateName],
  )

  React.useEffect(() => {
    searchItemInputRef.current?.blur()
  }, [destination])

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', () => {
        clearDestinationIndex()
      }),
    [clearDestinationIndex, navigation],
  )

  React.useEffect(() => {
    if (destinationIndex > 0) {
      const toOffset =
        (destinationIndex * Number(regionsSize)) / Number(regionSizeByStateName)

      const viewOffset = ~Math.max(toOffset, 0)

      setTimeout(() =>
        listRef.current?.scrollToIndex({
          index: destinationIndex,
          animated: true,
          viewOffset,
        }),
      )
    }
  }, [destinationIndex, regionSizeByStateName, regionsSize])

  if (loading)
    return (
      <View style={styles.containerLogoLoading}>
        <Icon icon="logoVowel" />
      </View>
    )

  if (Boolean(error?.message))
    return (
      <View style={styles.containerError}>
        <Text>Something was wrong</Text>
      </View>
    )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerBackButton}
          onPress={navigation.goBack}
        >
          <Icon icon="chevronLeft" />
          <View style={styles.headerBackButtonTextContainer}>
            <Text style={styles.headerBackButtonText}>Where</Text>
          </View>
        </TouchableOpacity>

        {destination?.name !== ANY_DESTINATION && (
          <TouchableOpacity onPress={clearAllDestinations}>
            <Text style={styles.headerClearText}>Clear All {'(1)'}</Text>
          </TouchableOpacity>
        )}
      </View>

      <SearchField
        placeholder="Search by a location or home name"
        ref={searchItemInputRef}
        onChangeText={setSearchInput}
        value={searchInput}
        onPressCloseXIcon={clearSearchInput}
      />

      <FlatList
        bounces={false}
        ref={listRef}
        data={statesGroupedKeys}
        ListHeaderComponentStyle={styles.listHeaderComponent}
        ListHeaderComponent={() => {
          return (
            <>
              {!searchInput && (
                <SelectItem region={INITIAL_STATE_REGION_DESTINATION} />
              )}
            </>
          )
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>
              We could not find any destinations matching your request. Send us
              a chat if you need help!
            </Text>
          </View>
        )}
        keyExtractor={stateName => stateName}
        renderItem={({ item }) => {
          return <SectionListItem stateName={item} key={item} />
        }}
      />

      <Button
        title="Search"
        variant="primaryFilled"
        onPress={navigation.goBack}
      />
    </SafeAreaView>
  )
}
export default observer(SearchDestinationScreen)
