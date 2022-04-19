import { addYears } from 'date-fns'
import React from 'react'
import DateRangePicker, { IDateRange } from './DateRangePicker'

type DateRangePickerCalendarProps = {
  onFullRangeSelected(range: IDateRange): void
  onFromOnlySelected(from: Date): void
}

const DateRangePickerCalendar = ({
  onFullRangeSelected,
  onFromOnlySelected,
}: DateRangePickerCalendarProps) => {
  return (
    <DateRangePicker
      minDate={new Date()}
      maxDate={addYears(new Date(), 1)}
      onFromOnlySelected={onFromOnlySelected}
      onFullRangeSelected={onFullRangeSelected}
      firstDay={1} // Sunday is 0, Monday is 1...
      width={'100%'} // style.width -> number | string
      color={'#011B35'}
      textColor={'#ffffff'}
    />
  )
}
export default DateRangePickerCalendar
