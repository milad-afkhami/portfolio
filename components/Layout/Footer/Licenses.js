import React from "react";
import { Div, Image, Link, Text } from "@kits";

export function FooterLicenses(props) {
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
    <Div flex={["end"]} row>
      {licenses.map(({ link, image }) => (
        <Link outerLink href={link} mx="3">
          <Div src={image} width="90px" height="90px" bg="bg-disabled" />
        </Link>
      ))}
    </Div>
  );
}
