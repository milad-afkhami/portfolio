import React from "react";
import { Div, Text } from "@kits";
import { useTranslation } from "@hooks";

export const BlogMeta = (props) => {
  const { category, readingTime, publishedAt } = props || {};

  const t = useTranslation().t;

  return (
    <Div curve="sm" grid={[`repeat(3, 1fr)`, undefined, "4", "3", "row"]}>
      {category && (
        <Div flex={["center", "between"]} bg="bg-secondary" curve="sm" p="3">
          <Div>
            <Text color="text-secondary">blog.meta.category</Text>
          </Div>
          <Div>
            <Text size="md-b">{`blog.category.${category}`}</Text>
          </Div>
        </Div>
      )}
      {readingTime && (
        <Div flex={["center", "between"]} bg="bg-secondary" curve="sm" p="3">
          <Div>
            <Text color="text-secondary">blog.meta.timeToReadLabel</Text>
          </Div>
          <Div>
            <Text size="md-b" noTranslation>
              {t("blog.meta.timeToReadValue", { time: readingTime })}
            </Text>
          </Div>
        </Div>
      )}
      {publishedAt && (
        <Div flex={["center", "between"]} bg="bg-secondary" curve="sm" p="3">
          <Div>
            <Text color="text-secondary">blog.meta.publishedAt</Text>
          </Div>
          <Div>
            <Text size="md-b" noTranslation>
              {publishedAt}
            </Text>
          </Div>
        </Div>
      )}
    </Div>
  );
};