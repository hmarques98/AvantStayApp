import React from 'react'
import { Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from '@shared-components/Icon'
import styles, { LINEAR_COLORS } from './styles'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        testID="imHouse"
        style={styles.image}
        source={require('@assets/images/img-house-and-people.png')}
      />

      <View style={styles.logoContainer}>
        <LinearGradient colors={LINEAR_COLORS} style={styles.linearGradient} />
        <Icon icon="logoText" />
      </View>
    </View>
  )
}
export default Header
