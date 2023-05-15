import Div from "@kits/Div";
import { TimelineSection } from "./Section";
import SectionTitle from "@components/Layout/Title/Section";

const Timeline = (props) => {
  const { title, icon = "timeline", sections } = props;

  return (
    <Div mb="5">
      <SectionTitle icon={icon} title={title} />
      <Div ml="5">
        {sections.map(({ items, year }, i) => (
          <TimelineSection
            key={i}
            year={year}
            items={items}
            last={i === sections.length - 1}
          />
        ))}
      </Div>
    </Div>
  );
};

export default Timeline;
