import React from 'react'
import { Animated, Easing, FlatList, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'

import { Region } from '@services/api/graphql/models/Destination'
import { useStores } from '@services/store'
import { ANY_DESTINATION } from '@services/store/Destination'

import Button from '@shared-components/Button'
import Icon from '@shared-components/Icon'

import Header from './components/Header'
import SearchItem from './components/SearchItem'
import SectionListItem from './components/SectionListItem'
import SelectItem from './components/SelectItem'
import useGetRegions from './hooks/useGetRegions'
import styles from './styles'
import Divider from '@shared-components/Divider'

const SearchDestinationScreen = () => {
  const navigation = useNavigation()
  const { destinationsStore } = useStores()
  const {
    setSearchInput,
    searchInput,
    clearSearchInput,
    statesGroupedKeys,
    destination,
    destinationIndex,
    clearDestinationIndex,
  } = destinationsStore

  const listRef = React.useRef<FlatList>(null)
  const searchItemInputRef = React.useRef<TextInput>(null)
  const animatedWidthDivider = React.useRef(new Animated.Value(0))

  const interpolatedAnimatedDivider = animatedWidthDivider.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  const toggleWidthAnimationToValue = React.useCallback(
    (toValue: number) => {
      Animated.timing(animatedWidthDivider.current, {
        toValue: toValue,
        useNativeDriver: false,
        duration: 400,
        easing: Easing.ease,
      }).start()
    },
    [animatedWidthDivider],
  )

  const { loading, error, data } = useGetRegions()

  const regionsSize = React.useMemo(
    () => (data?.regions ? data?.regions.length : 0),
    [data?.regions],
  )

  const regionSizeList = React.useMemo(
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
  }, [destination, toggleWidthAnimationToValue])

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
        (destinationIndex * Number(regionsSize)) / Number(regionSizeList)

      const viewOffset = ~Math.max(toOffset, 0)

      setTimeout(() =>
        listRef.current?.scrollToIndex({
          index: destinationIndex,
          animated: true,
          viewOffset,
        }),
      )
    }
  }, [destinationIndex, regionSizeList, regionsSize])

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
      <Header />

      <SearchItem
        onFocus={() => {
          toggleWidthAnimationToValue(1)
        }}
        onBlur={() => {
          toggleWidthAnimationToValue(0)
        }}
        ref={searchItemInputRef}
        onChangeText={setSearchInput}
        value={searchInput}
        onPressCloseXIcon={clearSearchInput}
      />

      <View>
        <Divider />
        <Animated.View
          style={[
            { width: interpolatedAnimatedDivider },
            styles.animatedDividerView,
          ]}
        />
      </View>

      <FlatList
        bounces={false}
        ref={listRef}
        data={statesGroupedKeys}
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
