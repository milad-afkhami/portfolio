import { Div } from "style-wiz";
import Image from "@kits/Image";
import type { FC } from "react";

interface BlogBannerProps {
  banner?: string;
  title: string;
}

const BlogBanner: FC<BlogBannerProps> = (props) => {
  const { banner, title } = props;

  if (!banner) return null;

  return (
    <Div
      position="relative"
      height="min(70vw, 600px)"
      width="100%"
      curve="sm"
      overflow="hidden"
    >
      <Image
        alt={title}
        src={banner}
        layout="fill"
        fit="cover"
        placeholder="blur"
        blurDataURL={banner}
        quality={100}
        priority
      />
    </Div>
  );
};

export default BlogBanner;
