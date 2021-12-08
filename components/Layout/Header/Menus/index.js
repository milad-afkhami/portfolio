import React from "react";
import { useState, useEffect } from "@hooks";
import { Div, Link, Text } from "@kits";
import { c } from "@stylesheets";

export function HeaderMenus(props) {
  return (
    <Div display="flex" mx="-3">
      <Link href="/" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.home
        </Text>
      </Link>
      <Link href="/courses" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.courses
        </Text>
      </Link>
      <Link href="/blog" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.blog
        </Text>
      </Link>
      <Link href="/packages" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.packages
        </Text>
      </Link>
      <Link href="/projects" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.projects
        </Text>
      </Link>
      <Link href="/favourites" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.favourites
        </Text>
      </Link>
      <Link href="/gists" mx="3">
        <Text size="md-b" tag="p" zoomOnHover hoverColor="text-secondary">
          layout.header.menu.gists
        </Text>
      </Link>
    </Div>
  );
}
