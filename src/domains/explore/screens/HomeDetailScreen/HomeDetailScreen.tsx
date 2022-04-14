import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface HomeDetailScreenProps {}

const HomeDetailScreen = ({}: HomeDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeDetailScreen</Text>
    </View>
  )
}
export default HomeDetailScreen
