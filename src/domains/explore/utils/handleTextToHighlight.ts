export const handleTextToHighlight = (
  textToHighlight: string,
  fullText: string,
) => {
  const startIndexToHighlight = fullText
    .toLowerCase()
    .indexOf(textToHighlight.toLowerCase())

  const endIndexTextToHighlight =
    fullText.toLowerCase().indexOf(textToHighlight.toLowerCase()) +
    textToHighlight.length

  const startTextTransparent = fullText.substring(0, startIndexToHighlight)

  const endTextTransparent = fullText.substring(
    endIndexTextToHighlight + fullText.length,
    endIndexTextToHighlight,
  )

  const textHighlighted = fullText.substring(
    startIndexToHighlight,
    endIndexTextToHighlight,
  )

  return { startTextTransparent, endTextTransparent, textHighlighted }
}
