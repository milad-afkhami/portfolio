import spacings from "@stylesheets/constants/spacing";
import __reduce from "lodash-es/reduce";

// read more about css logical properties here https://codepen.io/aardrian/pen/bGGxrvM
const spacingProps = [
  { key: "mr", properties: ["margin-right"] },
  { key: "ml", properties: ["margin-left"] },
  { key: "mEnd", properties: ["margin-inline-end"] },
  { key: "mStart", properties: ["margin-inline-start"] },
  { key: "mt", properties: ["margin-top"] },
  { key: "mb", properties: ["margin-bottom"] },
  { key: "mx", properties: ["margin-left", "margin-right"] },
  { key: "my", properties: ["margin-top", "margin-bottom"] },
  { key: "pr", properties: ["padding-right"] },
  { key: "pl", properties: ["padding-left"] },
  { key: "pEnd", properties: ["padding-inline-end"] },
  { key: "pStart", properties: ["padding-inline-start"] },
  { key: "pt", properties: ["padding-top"] },
  { key: "pb", properties: ["padding-bottom"] },
  { key: "px", properties: ["padding-left", "padding-right"] },
  { key: "py", properties: ["padding-top", "padding-bottom"] },
];

/**
 * this method will check the object passed to it and if there was any of the spacingProps object keys in it, it will translate that to correct style property.
 **/
const getOtherSpacings = (props = {}) =>
  __reduce(
    spacingProps.filter(({ key }) => props[key] !== undefined),
    (result, { key, properties }) => {
      properties.map((property) => {
        result[property] = spacings[props[key]] || props[key];
      });
      return result;
    },
    {}
  );

export default getOtherSpacings;
