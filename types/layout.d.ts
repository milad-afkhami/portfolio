import type { NoneToVoidFunction } from "ts-wiz";

export interface INavItem {
  link: string;
  label: string;
  onClick?: NoneToVoidFunction;
}
