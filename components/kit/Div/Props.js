import { HTMLAttributes } from "react";

/**
 * @typedef {import('@stylesheets/constants/spacing').Spacings|number} Spacings
 * @typedef {("xlg"|"lg"|"md"|"sm"|"xsm"|"xxsm"|"circle")} Curves
 * @typedef {("md"|"sm"|true|false)} Shadows
 * @typedef {("xFast"|"fast"|"normal"|"slow"|"xSlow")} Paces
 * @typedef {("left"|"right"|"top"|"bottom"|"inlineStart"|"inlineEnd")} BorderSide
 * @typedef {("pointer"|"copy"|"grab"|"grabbing"|"no-drop"|"none"|"not-allowed"|"zoom-in"|"default")} CursorValues
 * @typedef {("hidden"|"scroll"|"auto"|"visible")} OverflowValues
 * @typedef {("absolute"|"fixed"|"relative"|"sticky"|"unset")} PositionValues
 * @typedef {{top:string|number, bottom:string|number, left:string|number, right:string|number, insetInlineStart:string|number, insetInlineEnd:string|number }} Dimensions
 */

// Flex/Grid
/**
 * @typedef {("none"|"auto"|"max-content"|"min-content"|"length"|"initial"|"inherit")} GridTemplateColumnsValues
 * @typedef {("none"|"auto"|"max-content"|"min-content"|"length"|"initial"|"inherit")} GridTemplateRowsValues
 * @typedef {("center"|"end"|"start")} FlexAlignValues
 * @typedef {("center"|"end"|"start"|"around"|"between")} FlexJustifyValues
 * @typedef {("column"|"row"|"row-reverse"|"column-reverse")} FlexDirValues
 * @typedef {("wrap"|"no-wrap")} FlexWrapValues
 * @typedef {("row"|"column"|"dense"|"row dense"|"column dense")} GridAutoFlowValues
 * @typedef {{ xs:number, sm:number, md:number, lg:number, xl:number }} ColValues
 *
 * @typedef {[FlexAlignValues,FlexJustifyValues,FlexDirValues,FlexWrapValues]} FlexProps
 * @typedef {[GridTemplateColumnsValues,GridTemplateRowsValues,Spacings,Spacings,GridAutoFlowValues,FlexAlignValues,FlexJustifyValues]} GridProps
 */

// Animation
/**
 * @typedef {{ from: import("styled-components").CSSProperties, to: import("styled-components").CSSProperties, [key: string]: import("styled-components").CSSProperties }} KeyframeValues
 * @typedef {("infinite"|"initial"|"inherit"|number)} IterationCountValues
 * @typedef {("normal"|"reverse"|"alternate"|"alternate-reverse")} AnimationDirectionValues
 * @typedef {("linear"|"ease"|"ease-in"|"ease-out"|"ease-in-out"|"step-start"|"step-end"|"steps(int,start|end)"|"initial"|"inherit"|"cubic-bezier(n,n,n,n)")} TimingFunctionValues
 * @typedef {("none"|"forwards"|"backwards"|"both"|"initial"|"inherit")} FillModeValues
 * @typedef {("paused"|"running"|"initial"|"inherit")} PlayStateValues
 *
 * @typedef {{keyframes:KeyframeValues, duration:string, iterationCount:IterationCountValues, direction:AnimationDirectionValues, timingFunction:TimingFunctionValues, fillMode:FillModeValues, playState:PlayStateValues }} Animation
 */

/**
 * @typedef {Object} DivProps
 * @property {string} as
 * @property {boolean} container
 * @property {"ltr"|"rtl"} dir
 * @property {boolean} row
 * @property {string} width
 * @property {string} mw
 * @property {string} Mw
 * @property {string} height
 * @property {string} mh
 * @property {string} Mh
 * @property {boolean} hiddenScrollbar
 * @property {boolean} thinScrollbar
 * @property {boolean} matchParent
 * @property {Curves} curve
 * @property {Shadows} shadow
 * @property {Paces} pace
 * @property {import("@stylesheets/themes").Colors} border
 * @property {BorderSide} borderSide
 * @property {string} borderW
 * @property {import("@stylesheets/themes").Colors} bg
 * @property {string} bgImage
 * @property {import("@stylesheets/themes").Colors} color
 * @property {number|string} opacity
 * @property {import("@stylesheets/themes").Colors} hoverBg
 * @property {import("@stylesheets/themes").Colors} hoverColor
 * @property {string} hoverShadow
 * @property {string|Array} m
 * @property {string} mStart
 * @property {string} mEnd
 * @property {string} mx
 * @property {string} my
 * @property {string} mt
 * @property {string} mb
 * @property {string|Array} p
 * @property {string} pStart
 * @property {string} pEnd
 * @property {string} px
 * @property {string} py
 * @property {string} pt
 * @property {string} pb
 * @property {FlexProps|boolean} flex
 * @property {number|"auto"} flexPortion
 * @property {string} display: ;
 * @property {ColValues} col
 * @property {OverflowValues} overflow
 * @property {OverflowValues} overflowX
 * @property {OverflowValues} overflowY
 * @property {CursorValues} cursor
 * @property {PositionValues} position
 * @property {Dimensions} dimensions
 * @property {string} zIndex
 * @property {number|string} order
 * @property {GridProps} grid 0: grid-template-columns,  1: grid-template-rows,  2: column-gap,  3: row-gap,  4: grid-auto-flow,  5: align-content,  6: justify-content
 * @property {DivProps} after
 * @property {DivProps} before
 * @property {DivProps} hover
 * @property {boolean} zoomOnHover
 * @property {{xs_only?: DivProps, sm?: DivProps, sm_only?: DivProps, md?: DivProps, md_only?: DivProps, lg?: DivProps, lg_only?: DivProps, xl?: DivProps, xl_only?: DivProps, xxl?: DivProps, xxl_only?: DivProps, xxxl?: DivProps}} responsive
 * @property {import("styled-components").CSSProperties} css
 * @property {Animation} animation
 * @property {boolean} blurBg
 * @property {boolean} truncate
 */

/**
 * @typedef {HTMLAttributes|DivProps} Props
 */
