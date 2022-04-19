export const parseISODate = (date: Date) => {
  const parsedData = date.toISOString().replace('Z', '')

  return parsedData
}
