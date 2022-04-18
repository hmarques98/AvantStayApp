/* eslint-disable react/display-name */
import React from 'react'
import {
  Animated,
  Easing,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'

import Icon from '@shared-components/Icon'
import styles from './styles'
import { observer } from 'mobx-react-lite'
import Divider from '@shared-components/Divider'

export type SearchFieldProps = TextInputProps & {
  onPressSearchIcon?(): void
  onPressCloseXIcon?(): void
}

const SearchField = React.forwardRef<TextInput, SearchFieldProps>(
  ({ onPressSearchIcon, onPressCloseXIcon, ...restProps }, ref) => {
    const animatedWidthDivider = React.useRef(new Animated.Value(0))

    const interpolatedAnimatedDivider =
      animatedWidthDivider.current.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '100%'],
        extrapolate: 'clamp',
      })

    const toggleWidthAnimationToValue = React.useCallback(
      (toValue: number) => {
        Animated.timing(animatedWidthDivider.current, {
          toValue: toValue,
          useNativeDriver: false,
          duration: 400,
          easing: Easing.ease,
        }).start()
      },
      [animatedWidthDivider],
    )

    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressSearchIcon}>
            <Icon icon="search" style={styles.searchIcon} opacity={0.4} />
          </TouchableOpacity>

          <TextInput
            ref={ref}
            {...restProps}
            style={styles.searchInput}
            onFocus={e => {
              restProps.onFocus?.(e)
              toggleWidthAnimationToValue(1)
            }}
            onBlur={e => {
              toggleWidthAnimationToValue(0)
              restProps.onBlur?.(e)
            }}
          />

          <TouchableOpacity onPress={onPressCloseXIcon}>
            <Icon icon="closeX" style={styles.closeXIcon} />
          </TouchableOpacity>
        </View>

        <View>
          <Divider />

          <Animated.View
            style={[
              { width: interpolatedAnimatedDivider },
              styles.animatedDividerView,
            ]}
          />
        </View>
      </View>
    )
  },
)
export default observer(SearchField)
