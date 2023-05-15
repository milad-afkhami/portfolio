import type { HOCFunctionalComponent } from "@_types/components";

type ISwitch = HOCFunctionalComponent<{ expression?: unknown }>;

type ICase = HOCFunctionalComponent<{ value?: unknown }>;

export type { ISwitch, ICase };
