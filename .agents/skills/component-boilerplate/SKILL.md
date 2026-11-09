---
name: component-boilerplate
description: Use the project component template when creating a React component.
---

**Components Boilerplate**

```tsx
import type { ReactElement } from "react";

// If the component was an HOC, wrap with PropsWithChildren
type Props = {};

/** Short description of what it does, avoid redundant information when the code speaks for itself */
export default function SomeComponent(props: Props): ReactElement {
  const {} = props;

  return <div>Some Component</div>;
}
```
