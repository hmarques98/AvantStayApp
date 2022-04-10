import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

const PRIMARY_COLOR = '#022B54'
const SECONDARY_COLOR = '#010F1E'

const buttonVariants = {
  primaryFilled: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: PRIMARY_COLOR,
  },
  secondaryFilled: {
    borderColor: SECONDARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
  },
  primaryOutlined: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: 'transparent',
  },
  secondaryOutlined: {
    borderColor: SECONDARY_COLOR,
    backgroundColor: 'transparent',
  },
}

interface ButtonProps extends TouchableOpacityProps {
  title: string
  variant: keyof typeof buttonVariants
}

const Button = ({ title, variant, ...restProps }: ButtonProps) => {
  const isButtonVariantFilled = variant?.toLowerCase().includes('filled')
  const isButtonVariantOutlined = variant?.toLowerCase().includes('Outlined')
  const isButtonVariantPrimary = variant?.toLowerCase().includes('Primary')

  const textColor = isButtonVariantFilled
    ? '#fff'
    : isButtonVariantOutlined && isButtonVariantPrimary
    ? PRIMARY_COLOR
    : SECONDARY_COLOR
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonVariants?.[variant]]}
      {...restProps}
    >
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}
export default Button
