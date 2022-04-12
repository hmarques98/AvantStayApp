// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const groupBy = <T, K>(array: any[], key: K): T => {
  return array.reduce((result, currentValue) => {
    ;(result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue,
    )
    return result
  }, {})
}
