import Icon from '@shared-components/Icon'
import React from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './styles'

const HEADER_HEIGHT = 95
const SPACING = 12
const HIT_SLOP = 20
const ICON_COLOR_ON_SCROLL = '#022B54'

type AnimatedHeaderProps = {
  animatedValue?: Animated.Value
  onPressIconLeft(): void
  onPressIconRight(): void
}
const AnimatedHeader = ({
  animatedValue,
  onPressIconLeft,
  onPressIconRight,
}: AnimatedHeaderProps) => {
  const { top: topSafeArea } = useSafeAreaInsets()
  const scrollOffSet = HEADER_HEIGHT + topSafeArea + SPACING

  const backgroundColor = animatedValue?.interpolate({
    inputRange: [0, scrollOffSet],
    outputRange: ['transparent', '#ffffff'],
    extrapolate: 'clamp',
  })

  const opacityOnScroll = animatedValue?.interpolate({
    inputRange: [0, scrollOffSet - topSafeArea],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const opacityOffScroll = animatedValue?.interpolate({
    inputRange: [0, scrollOffSet + topSafeArea],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  })

  const buttons = React.useCallback(
    (color: string) => {
      return (
        <>
          <TouchableOpacity
            onPress={onPressIconLeft}
            hitSlop={{
              bottom: HIT_SLOP,
              left: HIT_SLOP,
              right: HIT_SLOP,
              top: HIT_SLOP,
            }}
          >
            <Icon icon="arrowLeft" color={color} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressIconRight}
            hitSlop={{
              bottom: HIT_SLOP,
              left: HIT_SLOP,
              right: HIT_SLOP,
              top: HIT_SLOP,
            }}
          >
            <Icon icon="share" color={color} />
          </TouchableOpacity>
        </>
      )
    },
    [onPressIconLeft, onPressIconRight],
  )

  return (
    <View style={[styles.container, { height: HEADER_HEIGHT }]}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            paddingBottom: SPACING,

            height: HEADER_HEIGHT,
            backgroundColor: backgroundColor,
            opacity: opacityOnScroll,
            zIndex: 10,
          },
        ]}
      >
        {buttons(ICON_COLOR_ON_SCROLL)}
      </Animated.View>

      <Animated.View
        style={[
          styles.animatedContainer,
          {
            paddingBottom: SPACING,
            zIndex: 5,
            height: HEADER_HEIGHT,
            opacity: opacityOffScroll,
          },
        ]}
      >
        {buttons('#fff')}
      </Animated.View>
    </View>
  )
}
export default React.memo(AnimatedHeader)
