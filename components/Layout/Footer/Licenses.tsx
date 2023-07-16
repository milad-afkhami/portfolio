import Div from "@kits/Div";
import Image from "@kits/Image";
import Link from "@kits/Link";
import type { FC } from "react";

const FooterLicenses: FC = () => {
  const licenses = [
    {
      link: "www.google.com",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgitiserver.com%2Fblog%2F%25D8%25A7%25DB%258C-%25D9%2586%25D9%2585%25D8%25A7%25D8%25AF-enamad-%25DA%2586%25DB%258C%25D8%25B3%25D8%25AA%25D8%259F-%25DA%2586%25D9%2587-%25D8%25B3%25D8%25A7%25DB%258C%25D8%25AA%25E2%2580%258C%25D9%2587%25D8%25A7%25DB%258C%25DB%258C-%25D8%25A8%25D9%2587-%25D8%25A2%25D9%2586-%25D9%2586%25DB%258C%25D8%25A7%25D8%25B2%2F&psig=AOvVaw1SsEQEGAQvjKVDoC52Ko_C&ust=1636473182611000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjc5-iPifQCFQAAAAAdAAAAABAD",
    },
    {
      link: "www.google.com",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgitiserver.com%2Fblog%2F%25D8%25A7%25DB%258C-%25D9%2586%25D9%2585%25D8%25A7%25D8%25AF-enamad-%25DA%2586%25DB%258C%25D8%25B3%25D8%25AA%25D8%259F-%25DA%2586%25D9%2587-%25D8%25B3%25D8%25A7%25DB%258C%25D8%25AA%25E2%2580%258C%25D9%2587%25D8%25A7%25DB%258C%25DB%258C-%25D8%25A8%25D9%2587-%25D8%25A2%25D9%2586-%25D9%2586%25DB%258C%25D8%25A7%25D8%25B2%2F&psig=AOvVaw1SsEQEGAQvjKVDoC52Ko_C&ust=1636473182611000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjc5-iPifQCFQAAAAAdAAAAABAD",
    },
    {
      link: "www.google.com",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgitiserver.com%2Fblog%2F%25D8%25A7%25DB%258C-%25D9%2586%25D9%2585%25D8%25A7%25D8%25AF-enamad-%25DA%2586%25DB%258C%25D8%25B3%25D8%25AA%25D8%259F-%25DA%2586%25D9%2587-%25D8%25B3%25D8%25A7%25DB%258C%25D8%25AA%25E2%2580%258C%25D9%2587%25D8%25A7%25DB%258C%25DB%258C-%25D8%25A8%25D9%2587-%25D8%25A2%25D9%2586-%25D9%2586%25DB%258C%25D8%25A7%25D8%25B2%2F&psig=AOvVaw1SsEQEGAQvjKVDoC52Ko_C&ust=1636473182611000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjc5-iPifQCFQAAAAAdAAAAABAD",
    },
  ];

  return (
    <Div flex={["flex-end"]}>
      {licenses.map(({ link, image }, i) => (
        <Link key={i} outerLink href={link} mx="3">
          <Image src={image} width={90} height={90} alt={link} />
        </Link>
      ))}
    </Div>
  );
};

export default FooterLicenses;
