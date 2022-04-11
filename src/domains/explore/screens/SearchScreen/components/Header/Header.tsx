import { useNavigation } from '@react-navigation/native'
import { useStores } from '@services/store'
import Icon from '@shared-components/Icon'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const Header = () => {
  const navigation = useNavigation()

  const { destinationsStore } = useStores()
  const { clearDestinations } = destinationsStore
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Icon icon="chevronLeft" />
        <View style={styles.backButtonTextContainer}>
          <Text style={styles.backButtonText}>Where</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearDestinations}>
        <Text style={styles.clearText}>Clear All {'(1)'}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
