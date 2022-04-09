import React from 'react'
import { Image, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from '@shared-components/Icon'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        style={{ width: '100%' }}
        source={require('@assets/images/logo.png')}
      />

      <View
        style={{
          position: 'absolute',
          paddingTop: 28,
          width: '100%',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <LinearGradient
          colors={['#00000052', '#00000000', '#00000000', '#0000004D']}
          style={{ position: 'absolute', width: '100%', height: 400 }}
        />
        <Icon icon="logoText" />
      </View>
    </View>
  )
}
export default Header
