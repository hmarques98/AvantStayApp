import React from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import Icon from '@shared-components/Icon'
import styles from './styles'

type SearchItemProps = TextInputProps & {
  onPressSearchIcon?(): void
  onPressCloseXIcon?(): void
}

const SearchItem = ({
  onPressCloseXIcon,
  onPressSearchIcon,
  ...restProps
}: SearchItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressSearchIcon}>
        <Icon icon="search" style={styles.searchIcon} opacity={0.4} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search by a location or home name"
        style={styles.searchInput}
        {...restProps}
      />
      <TouchableOpacity onPress={onPressCloseXIcon}>
        <Icon icon="closeX" style={styles.closeXIcon} />
      </TouchableOpacity>
    </View>
  )
}
export default SearchItem
