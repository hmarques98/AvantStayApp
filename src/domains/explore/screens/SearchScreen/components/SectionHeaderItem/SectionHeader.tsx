import { FONT_SSP_400, FONT_SSP_600 } from '@fonts'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

interface SectionHeaderProps {
  showCanSelectAll: boolean
  city: string
  country?: string
}

const SectionHeader = ({
  city,
  country,
  showCanSelectAll,
}: SectionHeaderProps) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontFamily: FONT_SSP_600 }}>
            {city} -
          </Text>
          <Text style={{ fontSize: 18, fontFamily: FONT_SSP_400 }}>
            {' '}
            {country}
          </Text>
        </View>
        {showCanSelectAll && (
          <TouchableOpacity style={{ marginLeft: 12, alignSelf: 'flex-end' }}>
            <Text
              style={{
                fontSize: 14,
                color: '#53C3D0',
                fontFamily: FONT_SSP_600,
              }}
            >
              Select all
            </Text>
          </TouchableOpacity>
        )}
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
  )
}
export default SectionHeader
