import Icon from '@shared-components/Icon'
import React from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{'<'}</Text>
          <Text>Where</Text>
        </View>
        <Text>Clear All {'(1)'}</Text>
      </View>

      <View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Icon icon="search" style={{ marginRight: 12 }} />
          <TextInput placeholder="Search by a location or home name" />
        </View>
        <View
          style={{
            backgroundColor: '#022B54',
            opacity: 0.15,
            height: 1,
            width: '100%',
            marginTop: 12,
          }}
        />
      </View>

      <FlatList
        bounces={false}
        data={mockData}
        style={{ marginVertical: 18 }}
        keyExtractor={({ city }) => city}
        renderItem={({ item }) => {
          return <SectionListItem {...item} key={item.city} />
        }}
      />
    </SafeAreaView>
  )
}
export default SearchScreen
