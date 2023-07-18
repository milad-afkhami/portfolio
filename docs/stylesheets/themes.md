# Themes

## Colors

Our theme colors are located in [constants/stylesheets/themes directory](../../constants/stylesheets/themes/) with files named after members of [Themes enum](../../constants/themes.ts).

## Theme Palette Structure

As you can see in json format, color palette is something like this:

|   Color   |   Type    |                                     Variation                                     |
| :-------: | :-------: | :-------------------------------------------------------------------------------: |
|   brand   |   **-**   | main, _[hover], [light], [lighter], [dark], [darker], [pale], [paler], [variant]_ |
|    bg     |   **-**   |                                       **-**                                       |
|  **\"**   |  primary  |                                      **\"**                                       |
|  **\"**   | secondary |                                      **\"**                                       |
|  **\"**   | tertiary  |                                      **\"**                                       |
|  **\"**   | disabled  |                                      **\"**                                       |
|   text    |   **-**   |                                       **-**                                       |
|  **\"**   |  primary  |                                      **\"**                                       |
|  **\"**   | secondary |                                      **\"**                                       |
|  **\"**   | tertiary  |                                      **\"**                                       |
|  **\"**   | disabled  |                                      **\"**                                       |
| assistive |   **-**   |                                       **-**                                       |
|  **\"**   |  success  |                                      **\"**                                       |
|  **\"**   |   error   |                                      **\"**                                       |
|  **\"**   |   info    |                                      **\"**                                       |
|  **\"**   |  warning  |                                      **\"**                                       |
|  border   |   **-**   |                                       **-**                                       |
|  **\"**   |   light   |                                      **\"**                                       |
|  **\"**   |   dark    |                                      **\"**                                       |

Between all variations, only `main` is required and must be provided.

## Color Codes

As a convention, each color code must be in HEX format.

## Modifying Palette

Upserting any color in theme palette requires to run [`stylesheets` script in package.json](../../package.json#28).

Wondering why this is required? read [Global Styles documentation](./global-styles.md).

## ~~Adding New Palette~~
