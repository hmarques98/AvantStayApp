import { useStores } from '@services/store'
import { FONT_SSP_400, FONT_SSP_600 } from '@shared/styles/theme/fonts'
import React from 'react'
import { View, Text } from 'react-native'

type HeaderProps = {
  position: number
  homesSize: number
}

const Header = ({ position, homesSize }: HeaderProps) => {
  const { destinationsStore } = useStores()
  const { destination } = destinationsStore
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        flexDirection: 'row',
      }}
    >
      <Text
        style={{
          fontFamily: FONT_SSP_600,
          color: '#022B54',
          fontSize: 12,
        }}
      >
        {position}{' '}
      </Text>
      <Text
        style={{
          fontFamily: FONT_SSP_400,
          color: '#022B54',
          fontSize: 12,
        }}
      >
        of{' '}
      </Text>
      <Text
        style={{
          fontFamily: FONT_SSP_600,
          color: '#022B54',
          fontSize: 12,
        }}
      >
        {homesSize}{' '}
      </Text>
      <Text
        style={{
          fontFamily: FONT_SSP_400,
          color: '#022B54',
          fontSize: 12,
        }}
      >
        homes in{' '}
      </Text>
      <Text
        style={{
          fontFamily: FONT_SSP_600,
          color: '#022B54',
          fontSize: 12,
        }}
      >
        {destination.name}
      </Text>
    </View>
  )
}
export default Header
