import { useNavigation } from '@react-navigation/native'
import Button from '@shared-components/Button'
import Divider from '@shared-components/Divider'
import React from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/Header'
import SearchItem from './components/SearchItem'
import SectionListItem from './components/SectionListItem'
import styles from './styles'

interface SearchScreenProps {}

const mockCity1 = {
  city: 'California',
  places: ['Big Bear', 'Coachella Valley', 'Joshua Tree', 'Lake Tahoe'],
}
const mockCity2 = {
  city: 'Baja California Sur',
  places: ['Cabon San Lucas'],
  country: 'Mexico',
}

const mockData = [mockCity1, mockCity2]

const SearchScreen = ({}: SearchScreenProps) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <SearchItem />

      <Divider />

      <FlatList
        bounces={false}
        data={mockData}
        style={{ marginVertical: 18 }}
        keyExtractor={({ city }) => city}
        renderItem={({ item }) => {
          return <SectionListItem {...item} key={item.city} />
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
export default SearchScreen
