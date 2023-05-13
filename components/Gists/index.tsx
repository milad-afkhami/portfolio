import Div from "@kits/Div";
import GistCard from "./Card";
import SectionTitle from "@components/Layout";

const Gists = (props) => {
  const {
    items = [],
    loading,
    title,
    loadingCount = 8,
    // orientation = Orientations.VERTICAL,
    ...rest
  } = props || {};

  return (
    <Div my="3" {...rest}>
      {title && <SectionTitle title={title} />}
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
          css={{ gridAutoFlow: "row" }}
          responsive={{
            sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
            lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
          }}
        >
          {items.map((post, i) => (
            <GistCard key={i} {...post} />
          ))}
        </Div>
      ) : (
        "Loading ..."
      )}
    </Div>
  );
};

export default Gists;
