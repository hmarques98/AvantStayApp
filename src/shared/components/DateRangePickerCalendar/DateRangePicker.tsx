import React, { useEffect, useState } from 'react'
import { addDays, differenceInDays, format, parseISO } from 'date-fns'
import {
  Calendar,
  CalendarProps,
  DateObject,
  PeriodMarking,
} from 'react-native-calendars'

export type IDateRange = {
  from: Date
  to: Date
}

type IDateRangePicker = CalendarProps & {
  width: number | string
  minDate: Date
  maxDate: Date
  onFullRangeSelected: (range: IDateRange) => void
  onFromOnlySelected?: (from: Date) => void
  initialRange?: IDateRange
  firstDay?: number // 0 is Sunday, 1 is Monday...
  color?: string
  textColor?: string
}

const DateRangePicker = (props: IDateRangePicker) => {
  const [fromDate, setFromDate] = useState(
    props.initialRange ? props.initialRange.from : props.minDate,
  )
  const [toDate, setToDate] = useState(
    props.initialRange ? props.initialRange.to : props.minDate,
  )
  const [selectedDates, setSelectedDates] = useState<{
    [date: string]: PeriodMarking
  }>({})

  const dateColor = props.color || '#f9be00'
  const dateTextColor = props.textColor || '#032a3b'
  const dateFormat = 'yyyy-MM-dd'
  const firstChoice = React.useRef(true)

  const setupRange = React.useCallback(() => {
    let numberOfDays = differenceInDays(toDate, fromDate)

    const dates: { [date: string]: PeriodMarking } = {}

    if (numberOfDays < 1) {
      setSelectedDates({
        [format(addDays(fromDate, 1), dateFormat)]: {
          startingDay: true,
          color: dateColor,
          textColor: dateTextColor,
        },
      })
      return
    }
    if (firstChoice.current) numberOfDays += 1
    for (let i = 0; i <= numberOfDays; i++)
      dates[format(addDays(fromDate, i + 1), dateFormat)] = {
        startingDay: i === 0,
        endingDay: i === numberOfDays,
        color: dateColor,
        textColor: dateTextColor,
      }
    firstChoice.current = false
    setSelectedDates(dates)
  }, [dateColor, dateTextColor, fromDate, toDate])

  useEffect(() => {
    setupRange()
  }, [fromDate, setupRange, toDate])

  const onDayPress = (day: DateObject) => {
    const isoDate = new Date(day.timestamp).toISOString()
    const date = parseISO(isoDate)
    const numberOfDays = differenceInDays(date, fromDate)

    if (numberOfDays < 1 || fromDate < toDate) {
      setFromDate(date)
      setToDate(date)
      if (props.onFromOnlySelected) props.onFromOnlySelected(date)
    } else {
      setToDate(date)
      props.onFullRangeSelected({ from: fromDate, to: date })
    }
  }

  return (
    <Calendar
      {...props}
      style={{ width: props.width }}
      minDate={props.minDate.toString()}
      maxDate={props.maxDate.toString()}
      firstDay={props.firstDay || 0}
      onDayPress={onDayPress}
      markingType={'period'}
      markedDates={selectedDates}
    />
  )
}

export default DateRangePicker
