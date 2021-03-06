# Description

## _renders a custom div component with needed stylesheets._

# Props

| **Property** |              **Summary**               | **defaultValue** |                                                                      **type**                                                                       |                                                                     **additionalDescription**                                                                     |
| :----------: | :------------------------------------: | :--------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  container   |      converts div to a container       |    undefined     |                                                                       Boolean                                                                       |
|     row      |         converts div to a row          |    undefined     |                                                                       Boolean                                                                       |
|   children   |       Children to render inside        |    undefined     |                                                                       Element                                                                       |
|    width     |              css `width`               |    undefined     |                                                                 String `\|` Number                                                                  |
|      mw      |            css `min-width`             |    undefined     |                                                                 String `\|` Number                                                                  |
|      Mw      |            css `max-width`             |    undefined     |                                                                 String `\|` Number                                                                  |
|    height    |              css `height`              |    undefined     |                                                                 String `\|` Number                                                                  |
|      mh      |            css `min-height`            |    undefined     |                                                                 String `\|` Number                                                                  |
|      Mh      |            css `max-height`            |    undefined     |                                                                 String `\|` Number                                                                  |
|    curve     |          css `border-radius`           |    undefined     |                                      [curves](../../stylesheets/curves.js) keys(xlg, lg, md, sm, xsm) `\|` \*                                       |
|    shadow    |            css `box-shadow`            |    undefined     |                                            [shadows](../../stylesheets/shadows.js) keys(md, sm) `\|` \*                                             |
|     pace     |            css `transition`            |    undefined     |                                        [paces](../../stylesheets/paces.js) keys(fast, normal, slow) `\|` \*                                         |
|    border    |              css `border`              |    undefined     |   css variables defined [here](../../stylesheets/global/colors.js) based on [themes](../../stylesheets/themes.js) `\|` possible css border values   |                                                 e.g. checkout [possible values](../../stylesheets/themes.js#L42)                                                  |
|   borderW    |           css `border-width`           |    undefined     |                                                          possible css border-width values                                                           |
|      bg      |            css `background`            |    undefined     | css variables defined [here](../../stylesheets/global/colors.js) based on [themes](../../stylesheets/themes.js) `\|` possible css background values |                                                 e.g. checkout [possible values](../../stylesheets/themes.js#L42)                                                  |
|   bgImage    |         css `background-image`         |    undefined     |                                                        possible css background-image values                                                         |
|    color     |              css `color`               |    undefined     |   css variables defined [here](../../stylesheets/global/colors.js) based on [themes](../../stylesheets/themes.js) `\|` possible css color values    |                                                 e.g. checkout [possible values](../../stylesheets/themes.js#L42)                                                  |
|   hoverBg    |        [hover]css `background`         |    undefined     | css variables defined [here](../../stylesheets/global/colors.js) based on [themes](../../stylesheets/themes.js) `\|` possible css background values |                                                 e.g. checkout [possible values](../../stylesheets/themes.js#L42)                                                  |
|  hoverColor  |           [hover]css `color`           |    undefined     |   css variables defined [here](../../stylesheets/global/colors.js) based on [themes](../../stylesheets/themes.js) `\|` possible css color values    |                                                 e.g. checkout [possible values](../../stylesheets/themes.js#L42)                                                  |
|      m       |              css `margin`              |    undefined     |                                  "Apx Bpx Cpx Dpx" `\|` ["Apx", "Bpx", "Cpx", "Dpx"]`\|` "Apx"`\|` ["Apx", "Bpx"]                                   | optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js) `\|` also see [css logical properties](https://codepen.io/aardrian/pen/bGGxrvM) |
|     mEnd     |        css `margin-inline-end`         |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     | optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js) `\|` also see [css logical properties](https://codepen.io/aardrian/pen/bGGxrvM) |
|    mStart    |       css `margin-inline-start`        |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     | optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js) `\|` also see [css logical properties](https://codepen.io/aardrian/pen/bGGxrvM) |
|      ml      |           css `margin-left`            |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      mr      |           css `margin-right`           |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      mx      |  css `margin-left` `&` `margin-right`  |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      my      |  css `margin-top` `&` `margin-bottom`  |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      mt      |            css `margin-top`            |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      mb      |          css `margin-bottom`           |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      p       |             css `padding`              |    undefined     |                                  "Apx Bpx Cpx Dpx" `\|` ["Apx", "Bpx", "Cpx", "Dpx"]`\|` "Apx"`\|` ["Apx", "Bpx"]                                   |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|     pEnd     |        css `padding-inline-end`        |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     | optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js) `\|` also see [css logical properties](https://codepen.io/aardrian/pen/bGGxrvM) |
|    pStart    |       css `padding-inline-start`       |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     | optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js) `\|` also see [css logical properties](https://codepen.io/aardrian/pen/bGGxrvM) |
|      px      | css `padding-left` `&` `padding-right` |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      py      | css `padding-top` `&` `padding-bottom` |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      pt      |           css `padding-top`            |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|      pb      |          css `padding-bottom`          |    undefined     |                                                     "Apx" `\|` ["Apx"]`\|` "SPACING_OBJECT_KEY"                                                     |                                         optionally u can use values defined in [spacing.js](../../stylesheets/spacing.js)                                         |
|   position   |             css `position`             |    undefined     |                                                            possible css position values                                                             |
|     flex     |      css flex related properties       |    undefined     |                                          ["ALIGN_ITEMS","JUSTIFY_CONTENT","FLEX_DIRECTION" ,"FLEX_WRAP" ]                                           |               instead of full property value u can use alignValues/justifyValues object keys defined in [flex.js](../../stylesheets/utils/flex.js)                |
|  animation   |    css animation related properties    |    undefined     |                                    { keyframes, duration, iterationCount, direction, timingFunction, fillMode }                                     |                                       see [Animation interface](../../components/kit/Div/Props.js#L7) for more information                                        |
|     col      |         bootstrap grid system          |    undefined     |                                         { xs?: [1-12], sm?: [1-12], md?: [1-12], lg?: [1-12], xl?: [1-12] }                                         |
|     grid     |      css grid related properties       |    undefined     |                                  ["GRID_TEMPLATE_COLUMN", "GRID_TEMPLATE_ROWS", "GRID_COLUMN_GAP", "GRID_ROW_GAP"]                                  |
|  responsive  |         responsive stylesheet          |    undefined     | an object with [mediaFeatures](../../stylesheets/breakpoints.js#L10) object keys defined in [breakpoints.js](../../stylesheets/breakpoints.js#L10)  |                                  you can use all the prop above syntax in this object, see example below for further information                                  |

```JSX
<Div
  className="CLASS_NAME"
  container
  row
  width="1rem"
  mw="1rem"
  Mw="1rem"
  curve="xlg | lg | md | sm | xsm | xxsm | 1rem"
  shadow="sm | md | 1rem 1rem black"
  pace="slow | normal | fast | 1s"
  border="primary | secondary | ... | #333 | rgba(...) | ..."
  borderW="2px"
  bg="primary | secondary | ... | #333 | rgba(...) | linear-gradient(...)"
  bgImage="url(...)"
  color="primary | secondary | ... | #333 | rgba(...) | ..."
  hoverBg="primary | secondary | ... | #333 | rgba(...) | ..."
  hoverColor="primary | secondary | ... | #333 | rgba(...) | ..."
  m="3" // spacing[3]
  m="2,3" // spacing[2] spacing[3]
  mx="2"
  position="unset"
  display="flex"
  flex={["start", "between", "column", "wrap"]}
  col={{ xs: 12, sm: 11, md: 10, lg: 9 }}
  grid={[`repeat(4, 1fr)`, '1fr', '3', '3']}
  overflow="auto"
  overflowX="auto"
  overflowY="auto"
  cursor="pointer"
  dimensions={{ top: 1, bottom: 2, right: 3, left: 4, insetInlineEnd: 1, insetInlineStart: 1, }}
  // => dimensions={{ top: spacing[1], bottom: spacing[2], right: spacing[3], left: spacing[4], insetInlineEnd: spacings[1], insetInlineStart: spacings[1] }}
  zIndex="3"
  order="-1"
  after={{ content: "*", color: "primary", position: "absolute", flex: "center,center" }}
  before={{ content: "*", color: "primary", position: "absolute", flex: "center,center" }}
  responsive={{ xs: { mx: 2 }, md: { pl: "2".imp() } }} // see (breakpoints.js)[] => mediaFeatures
  // => (min-width: ${bp.md}px) { padding-left: `${spacing[2]} !important` }
  css={{ lineHeight: "normal" }}
/>
```
