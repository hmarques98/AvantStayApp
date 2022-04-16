import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styles from './styles'

const PRIMARY_COLOR = '#022B54'
const SECONDARY_COLOR = '#010F1E'
const WHITE = '#FFFFFF'

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
  const isButtonVariantOutlined = variant?.toLowerCase().includes('outlined')
  const isButtonVariantPrimary = variant?.toLowerCase().includes('primary')

  const handleTextColorVariantFilled = () => {
    if (isButtonVariantFilled) return WHITE
  }

  const handleTextColorVariantOutlined = () => {
    if (isButtonVariantOutlined && isButtonVariantPrimary) {
      return PRIMARY_COLOR
    }
    return SECONDARY_COLOR
  }

  const handleTextColor = () => {
    if (handleTextColorVariantFilled()) {
      return handleTextColorVariantFilled()
    }
    return handleTextColorVariantOutlined()
  }

  const textColor = handleTextColor()

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
