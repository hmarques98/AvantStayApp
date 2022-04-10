import { FONT_SSP_600 } from '@fonts'
import { useNavigation } from '@react-navigation/native'
import Icon from '@shared-components/Icon'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Header = () => {
  const navigation = useNavigation()
  return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={navigation.goBack}
        >
          <Icon icon="chevronLeft" />
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontFamily: FONT_SSP_600,
                color: '#022B54',
                fontSize: 18,
              }}
            >
              Where
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: FONT_SSP_600,
              color: '#53C3D0',
              fontSize: 18,
            }}
          >
            Clear All {'(1)'}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <Icon icon="search" style={{ marginRight: 12 }} opacity={0.4} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search by a location or home name"
            style={{ flex: 1 }}
          />
          <TouchableOpacity>
            <Icon
              icon="closeX"
              style={{
                backgroundColor: '#E8EFF5',
                padding: 8,
                borderRadius: 16,
              }}
            />
          </TouchableOpacity>
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
    </>
  )
}

export default Header
