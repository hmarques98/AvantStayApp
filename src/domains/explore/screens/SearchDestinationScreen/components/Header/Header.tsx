import { useNavigation } from '@react-navigation/native'
import { useStores } from '@services/store'
import { ANY_DESTINATION } from '@services/store/Destination'
import Icon from '@shared-components/Icon'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const Header = () => {
  const navigation = useNavigation()

  const { destinationStore } = useStores()
  const { clearAllDestinations, destination } = destinationStore

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
        <Icon icon="chevronLeft" />
        <View style={styles.backButtonTextContainer}>
          <Text style={styles.backButtonText}>Where</Text>
        </View>
      </TouchableOpacity>
      {destination?.name !== ANY_DESTINATION && (
        <TouchableOpacity onPress={clearAllDestinations}>
          <Text style={styles.clearText}>Clear All {'(1)'}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default observer(Header)
