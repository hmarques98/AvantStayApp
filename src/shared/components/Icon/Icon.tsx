import React from 'react'
import { View } from 'react-native'
import { SvgIcons, svgIcons } from './SvgIcons'

type IconProps = {
  icon: SvgIcons
  color?: string
}

const Icon = (props: IconProps) => (
  <View testID="icon">{svgIcons[props.icon](props)}</View>
)

export default Icon
