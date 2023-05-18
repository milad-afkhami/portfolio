# Typographies

## Generation

Typographies also follow the auto generation process descried [here](./global-styles.md)

## Variables

Typography constants are located in [typographies.json](../../stylesheets/constants/typographies.json) file.

## Structure

- **Scope**

  - **Default**

    - A reserved keyword which means this variations will be used as long screen width is lower than next key breakpoint.

  - **Md**

    - Any key from [breakpoints.json](../../stylesheets/constants/breakpoints.json) object can be here. In our case we have `md` which means if screen width were greater than `breakpoints["md"]`, then these variations will override the default ones.

- **Variations**: Each scope contains some variations which are listed below

  - **Text**
    - xsm
    - sm
    - md
    - lg
  - **Heading**
    - h-sm
    - h-md
    - h-lg
    - h-xl
    - h-xxl
