import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { ExploreStackParamList } from '@services/navigation/Stacks'
import { ExploreStackEnum } from '@shared-models/Navigation'
import DateRangePickerCalendar from '@shared-components/DateRangePickerCalendar/DateRangePickerCalendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@shared-components/Button'
import { View } from 'react-native'
import { format } from 'date-fns'
import { parseISODate } from '@shared/utils/date/parseISO'
import { useStores } from '@services/store'

type CalendarScreensRouteProps = RouteProp<
  ExploreStackParamList,
  ExploreStackEnum.CALENDAR_SCREEN
>

type CalendarScreenNavigationProps = NativeStackNavigationProp<
  ExploreStackParamList,
  ExploreStackEnum.CALENDAR_SCREEN
>

const CalendarScreen = () => {
  const navigation = useNavigation<CalendarScreenNavigationProps>()
  const { destinationStore } = useStores()
  const { handleBookingPeriod } = destinationStore
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flex: 1,
      }}
    >
      <DateRangePickerCalendar
        onFromOnlySelected={from => {
          const checkIn = format(new Date(parseISODate(from)), 'yyyy-MM-dd')
          handleBookingPeriod({
            checkIn,
            checkOut: checkIn,
          })
        }}
        onFullRangeSelected={range => {
          const { from, to } = range

          const checkIn = format(new Date(parseISODate(from)), 'yyyy-MM-dd')
          const checkOut = format(new Date(parseISODate(to)), 'yyyy-MM-dd')
          handleBookingPeriod({ checkIn, checkOut })
        }}
      />

      <View style={{ paddingHorizontal: 26, paddingBottom: 26 }}>
        <Button
          onPress={() => navigation.goBack()}
          title="Back"
          variant="primaryFilled"
        />
      </View>
    </SafeAreaView>
  )
}
export default CalendarScreen
