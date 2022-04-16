import React, { useEffect } from 'react'
import {
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { MarkdownView } from 'react-native-markdown-view'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'
import HomeDetailSection from '@domains/explore/components/HomeDetailSection'
import {
  FONT_SSP_400,
  FONT_SSP_600,
  FONT_SSP_700,
} from '@shared/styles/theme/fonts'

import useGetHome from './hooks/useGetHome'
import styles from './styles'
import AnimatedHeader from './components/AnimatedHeader'

type HomesRegionsRouteProps = RouteProp<
  ExploreStackParamList,
  ExploreStackEnum.HOMES_REGION_SCREEN
>

type HomeRegionNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.HOME_DETAIL_SCREEN
>
const { height, width } = Dimensions.get('screen')

const ITEM_HEIGHT = height * 0.5
const ITEM_WIDTH = width
const PADDING_HORIZONTAL = 4
const DESCRIPTION_HEIGHT = 150

const HomeDetailScreen = () => {
  const {
    params: { id },
  } = useRoute<HomesRegionsRouteProps>()
  const navigation = useNavigation<HomeRegionNavigationProps>()

  const [isOpen, setIsOpen] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)
  const isMounted = React.useRef(false)
  const offsetAnimatedHeader = React.useRef(new Animated.Value(0)).current

  const descriptionContainerHeight = isOpen ? contentHeight : DESCRIPTION_HEIGHT

  const animatedHeight = React.useRef(
    new Animated.Value(descriptionContainerHeight),
  )

  const transition = Animated.timing(animatedHeight.current, {
    toValue: descriptionContainerHeight,
    useNativeDriver: false,
    duration: isOpen ? 2000 : 1000,
  })

  const mountedWithContentHeight = React.useMemo(
    () => isMounted && contentHeight === 0,
    [contentHeight],
  )

  useEffect(() => {
    if (!isMounted.current) isMounted.current = true

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

  if (error) return <Text>{error.message}</Text>
  if (loading) return <View style={{ flex: 1 }} />

  if (data)
    return (
      <View>
        <AnimatedHeader
          animatedValue={offsetAnimatedHeader}
          onPressIconLeft={navigationGoBack}
          onPressIconRight={shareHomeDetail}
        />

        <FlatList
          scrollEventThrottle={16}
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
          showsVerticalScrollIndicator={false}
          renderItem={() => <></>}
          ListHeaderComponent={() => {
            return (
              <>
                <View style={{ height: ITEM_HEIGHT }}>
                  <FlatList
                    horizontal
                    data={data?.photos}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.url}
                    bounces={false}
                    snapToAlignment="center"
                    removeClippedSubviews={false}
                    decelerationRate="fast"
                    snapToInterval={ITEM_WIDTH + PADDING_HORIZONTAL * 2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                      const firstItem = index === 0
                      const lasItem = data?.photos[data.photos.length - 1]
                      return (
                        <View
                          key={item.url}
                          style={{
                            paddingLeft: firstItem ? 0 : PADDING_HORIZONTAL,
                            paddingRight: lasItem ? 0 : PADDING_HORIZONTAL,
                          }}
                        >
                          <Image
                            style={{
                              width: ITEM_WIDTH + PADDING_HORIZONTAL,
                              height: ITEM_HEIGHT,
                            }}
                            source={{ uri: item.url }}
                          />
                        </View>
                      )
                    }}
                  />
                </View>
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
                      {data.description.replace(/\\/g, '')}
                    </MarkdownView>
                  </Animated.View>
                  <TouchableOpacity
                    hitSlop={{ top: 10, bottom: 10, right: 10 }}
                    style={styles.showDescriptionButton}
                    onPress={() => setIsOpen(prev => !prev)}
                  >
                    <Text
                      style={{ fontFamily: FONT_SSP_600, color: '#022B54B3' }}
                    >
                      View {isOpen ? 'less' : 'more'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )
          }}
          bounces={false}
          data={data.amenities}
          keyExtractor={item => item}
          ListFooterComponent={() => {
            return (
              <View
                style={[
                  styles.container,
                  {
                    marginTop: 50,
                  },
                ]}
              >
                <Text
                  style={{
                    fontFamily: FONT_SSP_700,
                    color: '#022B54',
                    fontSize: 26,
                  }}
                >
                  Amenities
                </Text>
                <FlatList
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  data={data.amenities}
                  numColumns={2}
                  style={{ marginTop: 30 }}
                  keyExtractor={item => item}
                  renderItem={({ item }) => {
                    return (
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 20,
                          flex: 1 / 2,
                        }}
                      >
                        <View style={{ paddingRight: 18 }}>
                          <Text>X</Text>
                        </View>

                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: FONT_SSP_400,
                            color: '#070707B2',
                          }}
                          numberOfLines={1}
                        >
                          {item}
                        </Text>
                      </View>
                    )
                  }}
                />
              </View>
            )
          }}
        />
      </View>
    )
}
export default HomeDetailScreen
