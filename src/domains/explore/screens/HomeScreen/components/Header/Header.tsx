import React from 'react'
import { Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles, { LINEAR_COLORS } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@shared-components/Icon'

const Header = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <Image
        testID="imHouse"
        style={styles.image}
        source={require('@assets/images/img-house-and-people.png')}
      />

      <View style={styles.logoContainer}>
        <LinearGradient
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 0 }}
          locations={[0, 0.1, 0.7, 0.9]}
          colors={LINEAR_COLORS}
          style={styles.linearGradient}
        />
      </View>
      <View style={{ marginTop: top, position: 'absolute' }}>
        <Icon icon="logoText" testID="icLogoText" />
      </View>
    </View>
  )
}
export default Header
