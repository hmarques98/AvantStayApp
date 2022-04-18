import React from 'react'
import { View, Text } from 'react-native'

import { Home } from '@services/api/graphql/models/Destination'
import Icon from '@shared-components/Icon'
import styles from './styles'

type HomeDetailSectionProps = {
  data?: Home
}
const HomeDetailSection = ({ data }: HomeDetailSectionProps) => {
  const {
    bathroomsCount,
    bedsCount,
    cityName,
    hasPool,
    regionName,
    stateCode,
    maxOccupancy,
    title,
  } = data || ({} as Home)

  return (
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
              {bathroomsCount} Bathroom{`${bathroomsCount > 1 ? 's' : ''}`}
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
  )
}
export default React.memo(HomeDetailSection)
