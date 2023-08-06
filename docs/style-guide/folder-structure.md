# Folder Structure

In this codebase, I have organized the code into various directories to maintain a clean and scalable structure.
Here's a breakdown of the different folders and their purposes:

## 1. Components

This directory contains components(no necessarily reusable ones) that we can use throughout the application.

### 1.1. Cards

For instance, imagine we have two different card components, "ProductCard" and "BusinessCard"
each with its sub-components should have this structure:

- components

  - Card

    - Product

      - index.js: contains `ProductCards` component which is a list of product cards
      - Title.js: contains `ProductCardsTitle` component
      - Item
        - index.js: contains `ProductCard` component
        - Title.js: contains `ProductCardTitle` component
        - Subtitle.js: contains `ProductCardSubtitle` component
        - Image.js: contains `ProductCardImage` component

    - Business
      - index.js: contains `BusinessCards` component which is a list of business cards
      - Title.js: contains `BusinessCardsTitle` component
      - Item:
        - index.js: contains `BusinessCard` component
        - Title.js: contains `BusinessCardTitle` component
        - Subtitle.js: contains `BusinessCardSubtitle` component
        - Image.js: contains `BusinessCardImage` component
        - Category.js: contains `BusinessCardCategory` component

### 1.2. Components/Kits

Similar to atoms in atomic design, "Kits" are the smallest building blocks used to create larger components and containers.
Here, we have components like "Text," "Icon," "Image," and so on.

## 2. Utils

The "Utils" directory is a way to separate code logic into smaller, more reusable units.
These utilities should be usable across multiple projects.
For instance, "QS" and "Cookies" are utils since they can be used in any project,
while "serializeProductFilters" is not a util as it has project-specific meaning.

## 3. Hooks

The "Hooks" directory contains utility functions that make use of React hooks, something not feasible within normal utils.
For example, we have "useToggle" and "useDisclosure" hooks that use "useState" hook inside them.
Additionally, we have an "api" folder inside "Hooks" for building hooks that communicate with the backend.

## 4. Helpers

The "Helpers" directory stores parts of logic that may not be reusable as much as utils, but it is beneficial to separate them from components. These helpers contain logic that may not fit well into the "Utils" folder.

## 5. Constants

This directory is for storing all the constants used in our logic. The variable names should follow **UPPER_SNAKE_CASE** convention and be exported as default.

Take "constants/os.js" for example that Contains an object of OS constants like IOS, ANDROID, MACOS, WINDOWS, LINUX, and UNKNOWN.

```ts
const Os = {
  Ios: "IOS",
  Android: "ANDROID",
  MacOs: "MacOS",
  Windows: "Windows",
  Linux: "Linux",
  Unknown: "UNKNOWN",
};

export default Os;
```

## 6. Services

The "Services" folder houses API calls that don't store any response data.
If a call involves storing data, it should go into the "hooks/api" folder.

## 7. Contexts

The "Contexts" folder contains all the logic related to our usage of the React Context API.

## 8. Data

The "Data" directory stores large arrays and objects used as data to create components.
For example, it may contain data about categories, contact methods, and more.

## 9. Scripts

In the "Scripts" directory, we place automated scripts, such as building the app, generating documentation, and other automated tasks.

## Conclusion

By maintaining this folder structure, we aim to achieve better organization, maintainability, and scalability throughout our React project.
