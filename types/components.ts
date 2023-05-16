import I18nHelper from "@helpers/i18n";
import type { FunctionComponent, PropsWithChildren } from "react";
import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";

export interface LayoutConfig {
  /**
   * Render no header
   *
   * Default value is false
   */
  readonly noHeader?: boolean;
  /**
   * Render no footer
   *
   * Default value is false
   */
  readonly noFooter?: boolean;
}

type It9n = UnPromise<ReturnType<typeof I18nHelper.t9n>>;

export type PageComponent<P = {}> = NextPage<It9n & P> & {
  layoutConfig?: LayoutConfig;
};

export type NonTranslatedPageComponent<P = {}> = NextPage<P> & {
  layoutConfig?: LayoutConfig;
};

type AppComponentProp = NextAppProps["Component"] & {
  layoutConfig?: LayoutConfig;
};

export interface AppProps<T = {}> extends NextAppProps<T> {
  Component: AppComponentProp;
}

export type HOCFunctionalComponent<T = {}> = FunctionComponent<
  PropsWithChildren<T>
>;
