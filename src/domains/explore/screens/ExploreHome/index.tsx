import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './ExploreHomeScreen.styles'
import Header from './components/Header'

interface ExploreHomeScreenProps {}

const ExploreHomeScreen = ({}: ExploreHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}
export default ExploreHomeScreen
