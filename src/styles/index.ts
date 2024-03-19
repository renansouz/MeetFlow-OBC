import { createStitches } from '@stitches/react'

import {
  colors,
  fonts
} from './themas'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
  },
})