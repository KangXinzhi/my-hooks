import React, { useState } from 'react'

export default function use16_9Rem(designWidth = 1920) {
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const def = 100 / designWidth
  const rem = def * width

  const [widthRem, setWidthRem] = useState(0)
  const [heightRem, setHeightRem] = useState(0)

  React.useEffect(() => {
    if (width / 16 >= height / 9) {
      setWidthRem((height * 16) / 9 / rem)
      setHeightRem(height / rem)
    } else {
      setWidthRem(width / rem)
      setHeightRem((width * 9) / 16 / rem)
    }
  }, [width, height])

  return {
    widthRem,
    heightRem,
  }
}
