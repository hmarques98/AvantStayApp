import React from 'react'
import { View, ViewProps } from 'react-native'
import { PathProps } from 'react-native-svg'
import { SvgIcons, svgIcons } from './SvgIcons'

type IconProps = PathProps &
  ViewProps & {
    icon: SvgIcons
    color?: string
  }

const Icon = (props: IconProps) => (
  <View testID="icon" {...props}>
    {svgIcons[props.icon](props)}
  </View>
)

export default Icon
