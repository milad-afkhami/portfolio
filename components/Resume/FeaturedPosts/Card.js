import React from "react";
import { Div, Text, Image } from "@kits";
import { useState, useDispatch, useSelector } from "@hooks";

export const FeaturedPostCard = (props) => {
  const {
    _id = "",
    title = "",
    views = "",
    image = "",
    body = "",
    publishedAt = "",
    readingTime = "",
    slug = "",
    category = "",
    summary = "",
    minutesToRead = 0,
  } = props || {};

  return (
    <Div width="480px" height="200px">
      <Div height="100%" width="160px" position="relative">
        <Image src={image} layout="fill" fit="cover" />
      </Div>
      <Div p="3">
        <Div flex={["start", "between", "column"]}>
          <Div border="border-light" borderSide="bottom">
            {category}
          </Div>
          <Div>
            <Div>
              <Text>{title}</Text>
            </Div>
            <Div>
              <Text>{summary}</Text>
            </Div>
          </Div>
          <Div border="border-light" borderSide="top">
            <Div></Div>
            <Div>
              <Text>{minutesToRead}</Text>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};
