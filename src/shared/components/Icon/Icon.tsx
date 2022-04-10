import React from 'react'
import { View } from 'react-native'
import { PathProps } from 'react-native-svg'
import { SvgIcons, svgIcons } from './SvgIcons'

type IconProps = PathProps & {
  icon: SvgIcons
  color?: string
}

const Icon = (props: IconProps) => (
  <View testID="icon">{svgIcons[props.icon](props)}</View>
)

export default Icon
