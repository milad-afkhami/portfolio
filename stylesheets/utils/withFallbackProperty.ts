const withFallbackProperty=(
  property,
  value,
  fallbackProperty
  // options: { templateLiterals: Boolean }
) =>{
  // const { templateLiterals } = options || {};

  return {
    [property]: value,
    ...(fallbackProperty
      ? {
          [`@supports not (${cssCorrespondingProperty[property]}: ${value})`]:
            typeof fallbackProperty === "string"
              ? { [fallbackProperty]: value }
              : typeof fallbackProperty === "object"
              ? {
                  [`html[dir="ltr"] &`]: { [fallbackProperty.ltr]: value },
                  [`html[dir="rtl"] &`]: { [fallbackProperty.rtl]: value },
                }
              : {},
        }
      : {}),
  };
}

const cssCorrespondingProperty = {
  insetInlineEnd: "inset-inline-end",
  insetInlineStart: "inset-inline-start",
};

export default withFallbackProperty