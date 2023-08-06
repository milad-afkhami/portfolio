# Import Priority

This is not a very important rule but complying with it is not gonna have harm either.

The priority is like below:

1. Imports from React except for types. e.g. hooks and ...

```ts
import { useState } from "react";
```

2. Kits

```ts
import Text from "@kits/Text";
```

3. Components

```ts
import AnyComponent from "@components/AnyComponent";
```

4. Contexts

```ts
import LayoutProvider from "@contexts/Layout/Provider";
```

5. Hooks

```ts
import useToggle from "@hooks/useToggle";
```

6. Utils

```ts
import Http from "@utils/Http";
```

7. Helpers

```ts
import LayoutHelper from "@helpers/layout";
```

8. Services

```ts
import AuthServices from "@services/auth";
```

9. Configs

```ts
import { appBaseURL } from "@configs/utl";
```

10. Constants

```ts
import { TOKEN_COOKIE_KEY } from "@constants/cookies";
```

11. Static Files

```ts
import appLogo from "@images";
import "path/to/a/css/file.css";
```

12. Types

```ts
import type { FC, PropsWithChildren } from "react";
import type DivProps from "@kits/Div/props";
```
