import { useNavigation } from '@react-navigation/native'
import { useStores } from '@services/store'
import Button from '@shared-components/Button'
import Divider from '@shared-components/Divider'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import SearchItem from './components/SearchItem'
import SectionListItem from './components/SectionListItem'
import SelectItem from './components/SelectItem'
import useGetRegions from './hooks/useGetRegions'
import styles from './styles'

interface SearchScreenProps {}

const SearchScreen = ({}: SearchScreenProps) => {
  const navigation = useNavigation()
  const { destinationsStore } = useStores()
  const { setSearchInput, searchInput, clearSearchInput, regions } =
    destinationsStore

  const { loading, error } = useGetRegions()

  if (loading) return <Text>is Loading</Text>
  if (error) return <Text>Something is wrong</Text>

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SearchItem
        onChangeText={setSearchInput}
        value={searchInput}
        onPressCloseXIcon={clearSearchInput}
      />

      <Divider />

      <SelectItem place="Any destination" />

      <FlatList
        bounces={false}
        data={Object.keys(regions)}
        style={{ marginVertical: 18 }}
        keyExtractor={stateName => stateName}
        renderItem={({ item }) => {
          return <SectionListItem stateName={item} key={item} />
        }}
      />

      <Button
        title="Search"
        variant="primaryFilled"
        onPress={() => {
          navigation.goBack()
        }}
      />
    </SafeAreaView>
  )
}
export default observer(SearchScreen)
