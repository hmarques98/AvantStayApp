import React, { useEffect } from 'react'
import { View, FlatList, TouchableOpacity, Text, Animated } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MarkdownView } from 'react-native-markdown-view'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'
import HomeDetailSection from '@domains/explore/components/HomeDetailSection'

import useGetHome from './hooks/useGetHome'
import styles from './styles'
import AnimatedHeader from './components/AnimatedHeader'
import AmenitiesList from './components/AmenitiesList'
import PhotosList from './components/PhotosList'

type HomesRegionsRouteProps = RouteProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

type HomeRegionNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOME_DETAIL_SCREEN
>

const DESCRIPTION_HEIGHT = 150

const HomeDetailScreen = () => {
  const {
    params: { id },
  } = useRoute<HomesRegionsRouteProps>()
  const navigation = useNavigation<HomeRegionNavigationProps>()

  const [isDescriptionExpanded, setIsDescriptionExpanded] =
    React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)

  const isMounted = React.useRef(false)
  const offsetAnimatedHeader = React.useRef(new Animated.Value(0)).current

  const descriptionContainerHeight = isDescriptionExpanded
    ? contentHeight
    : DESCRIPTION_HEIGHT
  const animatedHeight = React.useRef(
    new Animated.Value(descriptionContainerHeight),
  )

  const transition = Animated.timing(animatedHeight.current, {
    toValue: descriptionContainerHeight,
    useNativeDriver: false,
    duration: 1000,
  })

  const mountedWithContentHeight = React.useMemo(
    () => isMounted && contentHeight === 0,
    [contentHeight],
  )

  useEffect(() => {
    if (!isMounted.current) isMounted.current = true
  })

  useEffect(() => {
    transition.start()
  }, [contentHeight, transition])

  const navigationGoBack = React.useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const shareHomeDetail = () => {
    //* does some stuff
    //* open native share
  }

  const { data, loading, error } = useGetHome({ id })

  if (loading) return <View style={{ flex: 1 }} />
  if (error) return <Text>{error.message}</Text>

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <AnimatedHeader
        animatedValue={offsetAnimatedHeader}
        onPressIconLeft={navigationGoBack}
        onPressIconRight={shareHomeDetail}
      />

      <FlatList
        scrollEventThrottle={16}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={() => <></>}
        data={[]}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: offsetAnimatedHeader },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        ListHeaderComponent={() => {
          return (
            <>
              <PhotosList photos={data?.photos} />
              <View style={styles.sectionDetailContainer}>
                <HomeDetailSection data={data} />
              </View>
              <View style={styles.container}>
                <Animated.View
                  onLayout={({ nativeEvent }) => {
                    if (mountedWithContentHeight) {
                      setContentHeight(nativeEvent.layout.height)
                    }
                  }}
                  style={{
                    opacity: !mountedWithContentHeight ? 1 : 0,
                    overflow: 'hidden',
                    height: mountedWithContentHeight
                      ? 'auto'
                      : animatedHeight.current,
                  }}
                >
                  <MarkdownView
                    styles={{
                      paragraph: styles.paragraph,
                      em: styles.em,
                      strong: styles.strong,
                    }}
                  >
                    {data?.description.replace(/\\/g, '')}
                  </MarkdownView>
                </Animated.View>
                <View style={styles.container}>
                  {!isDescriptionExpanded && (
                    <View style={styles.shadowDescription} />
                  )}
                </View>
                <TouchableOpacity
                  hitSlop={{ top: 10, bottom: 10, right: 10 }}
                  style={styles.showDescriptionButton}
                  onPress={() => setIsDescriptionExpanded(prev => !prev)}
                >
                  <Text style={styles.showDescriptionText}>
                    View {isDescriptionExpanded ? 'less' : 'more'}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )
        }}
        ListFooterComponent={() => {
          return <AmenitiesList data={data?.amenities} />
        }}
      />
    </View>
  )
}
export default HomeDetailScreen
