import { HomesResult } from '@services/api/graphql/models/Destination'
import Icon from '@shared-components/Icon'
import React from 'react'
import { Text } from 'react-native'
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import Header from '../Header'
import styles from './styles'

interface HomeRegionProps {
  listSize: {
    width: number
    height: number
  }
  data: HomesResult
  itemPosition: number
}

const HomeRegion = ({ listSize, data, itemPosition }: HomeRegionProps) => {
  const {
    bathroomsCount,
    bedsCount,
    cityName,
    hasPool,
    photos,
    regionName,
    stateCode,
    maxOccupancy,
    title,
  } = data
  return (
    <View
      style={[
        styles.container,
        {
          width: listSize.width - 24,
          height: listSize.height,
        },
      ]}
    >
      <TouchableWithoutFeedback
      // onPress={() => navigation.navigate(ExploreStackEnum.HOME_DETAIL_SCREEN)}
      >
        <ImageBackground
          style={styles.imageBackgroundContainer}
          imageStyle={{ borderRadius: 10 }}
          source={{ uri: photos[0].url }}
          resizeMode="cover"
        >
          <Header homesSize={10} position={itemPosition} />
        </ImageBackground>
      </TouchableWithoutFeedback>

      <View style={styles.homeDetailsContainer}>
        <Text style={styles.homeLabelText}>
          {regionName} - {cityName}, {stateCode}
        </Text>
        <Text style={styles.homeTitleText}>{title}</Text>

        <View style={styles.detailsHomeContainer}>
          {Boolean(bedsCount) && (
            <View style={styles.detailHomeContainer}>
              <Icon icon="bed" opacity={0.7} />
              <Text style={styles.detailsHomeText}>
                {bedsCount} Bedroom{`${bedsCount > 1 ? 's' : ''}`}
              </Text>
            </View>
          )}

          {Boolean(bathroomsCount) && (
            <View style={styles.detailHomeContainer}>
              <Icon icon="bath" opacity={0.7} />
              <Text style={styles.detailsHomeText}>
                {bathroomsCount} Bathroom
                {`${bathroomsCount > 1 ? 's' : ''}`}
              </Text>
            </View>
          )}

          {hasPool && (
            <View style={styles.detailHomeContainer}>
              <Icon icon="pool" opacity={0.7} />
              <Text style={styles.detailsHomeText}>Pool</Text>
            </View>
          )}

          <View style={styles.detailHomeContainer}>
            <Icon icon="user" opacity={0.7} />
            <Text style={styles.detailsHomeText}>{maxOccupancy}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default HomeRegion
