export const handleTextToHighlight = (
  textToHighlight: string,
  fullText: string,
) => {
  const indexTextToHighlight = fullText
    .toLowerCase()
    .indexOf(textToHighlight.toLowerCase())

  const startIndexToHighlight = indexTextToHighlight

  const handleEndIndexTextToHighlight = () => {
    if (indexTextToHighlight < 0) {
      return 0
    }

    return indexTextToHighlight + textToHighlight.length
  }

  const endIndexTextToHighlight = handleEndIndexTextToHighlight()

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
