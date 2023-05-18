import I18nHelper from "@helpers/i18n";
import type { FunctionComponent, PropsWithChildren } from "react";
import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

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

export type HOCFunctionalComponent<T = Dictionary> = FunctionComponent<
  PropsWithChildren<T>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface MDXResult<T extends Dictionary<any>> {
  source: MDXRemoteSerializeResult;
  frontMatter: T;
}

export type PropsWithIndex<P = unknown> = P & {
  index: number;
};
