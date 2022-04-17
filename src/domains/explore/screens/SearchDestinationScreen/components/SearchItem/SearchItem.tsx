/* eslint-disable react/display-name */
import React from 'react'
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'

import Icon from '@shared-components/Icon'
import styles from './styles'
import { observer } from 'mobx-react-lite'

type SearchItemProps = TextInputProps & {
  onPressSearchIcon?(): void
  onPressCloseXIcon?(): void
}

const SearchItem = React.forwardRef<TextInput, SearchItemProps>(
  ({ onPressSearchIcon, onPressCloseXIcon, ...restProps }, ref) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPressSearchIcon}>
          <Icon icon="search" style={styles.searchIcon} opacity={0.4} />
        </TouchableOpacity>
        <TextInput
          ref={ref}
          accessibilityLabel="Search by a location or home name"
          placeholder="Search by a location or home name"
          style={styles.searchInput}
          {...restProps}
        />
        <TouchableOpacity onPress={onPressCloseXIcon}>
          <Icon icon="closeX" style={styles.closeXIcon} />
        </TouchableOpacity>
      </View>
    )
  },
)
export default observer(SearchItem)
