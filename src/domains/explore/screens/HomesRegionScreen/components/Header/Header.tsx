import { useStores } from '@services/store'
import { INITIAL_STATE_DESTINATION } from '@services/store/Destination'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type HeaderProps = {
  position: number
  homesSize: number
}

const Header = ({ position, homesSize }: HeaderProps) => {
  const { destinationsStore } = useStores()
  const { destination } = destinationsStore
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>{position} </Text>
      <Text style={styles.lightText}>of </Text>
      <Text style={styles.boldText}>{homesSize} </Text>
      <Text style={styles.lightText}>homes</Text>
      {destination.name !== INITIAL_STATE_DESTINATION.name && (
        <>
          <Text style={styles.lightText}> in </Text>
          <Text style={styles.boldText}>{destination.name}</Text>
        </>
      )}
    </View>
  )
}
export default observer(Header)
