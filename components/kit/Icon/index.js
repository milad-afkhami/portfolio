import React, { ComponentType } from "react";
import { Div } from "@kits";
import styled from "styled-components";
import { setTextTypography } from "@stylesheets";
import { Props as DivProps } from "@kits/Div/DivProps";
import { useTranslation } from "@hooks";

export const Icon: ComponentType<IconProps> = styled(Div).attrs(
  ({
    prefix = "lp",
    name,
    multiDirection,
    className = "",
    size = "md",
    cursor = "pointer",
    hoverColor = "text-secondary",
    title,
  }) => {
    const t = useTranslation().t;
    const _name = `${prefix}-${name}`;
    const dirCN = multiDirection ? "icon-dir" : "";
    const _title = title ? { title: t(title) } : {};
    return {
      as: "i",
      className: `${_name} ${dirCN} ${className}`,
      size,
      cursor,
      hoverColor,
      ..._title,
    };
  }
)(({ size, bold }) => ({ ...setTextTypography(size, bold) }));

export interface IconProps extends DivProps {
  name: IconName;
  size?: Number;
  bold?: Boolean;
  multiDirection?: Boolean;
}

type IconName =
  | "Arrows-left"
  | "Arrows-right"
  | "tike"
  | "check-double-line"
  | "question-line"
  | "notification-bell"
  | "accont-1"
  | "accont"
  | "arrow-left-s-line-left"
  | "arrow-left-s-line-right"
  | "bank-card-fill"
  | "close-line"
  | "close"
  | "delete"
  | "dislike"
  | "edit"
  | "eye-2-line"
  | "eye-close-line"
  | "Favourites---fill"
  | "Favourites---Line"
  | "Filter"
  | "In-person-payment---fill"
  | "instagram"
  | "like"
  | "linkdin"
  | "location"
  | "Negative"
  | "Next-shopping-list"
  | "order-history"
  | "play-circle"
  | "Positive"
  | "recent-visite"
  | "referral-request"
  | "Restore"
  | "search"
  | "service"
  | "share-line"
  | "shopping-bag"
  | "star-half-s-line"
  | "star-s-fill"
  | "star-s-line"
  | "Truck"
  | "twitter"
  | "youtube";
