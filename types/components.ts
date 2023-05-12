import I18nSSRHelper from "@helpers/i18n.server";
import type { FunctionComponent, PropsWithChildren } from "react";
import type { AppProps as NextAppProps } from "next/app";
import type { NextPage } from "next";

type It9n = UnPromise<ReturnType<typeof I18nSSRHelper.t9n>>;

export type PageComponent<P = {}> = NextPage<It9n & P> & {};

export type NonTranslatedPageComponent<P = {}> = NextPage<P> & {};

export interface AppProps<T = {}> extends NextAppProps<T> {
  Component: NextAppProps["Component"];
}

export type HOCFunctionalComponent<T = {}> = FunctionComponent<
  PropsWithChildren<T>
>;
