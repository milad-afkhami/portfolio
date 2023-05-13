import Div from "@kits/Div";
import Timeline from "@kits/Timeline";
import Head from "@components/SEO/Head";
import { SocialProfileJsonLd, VideoJsonLd } from "next-seo";
import PageTitle from "@components/Layout/Title/Page";
import WhoAmI from "@components/About/WhoAmI";
import {
  aboutTimelineSections,
  appBaseURL,
  contactOptions,
  educationTimelineSections,
  workExperienceTimelineSections,
} from "@config";
import useTranslation from "@hooks/useTranslation";

const AboutPage = (props) => {
  const { t } = useTranslation();
  const videoTitle = t("about.video.title");
  const videoDesc = t("about.video.desc");
  const videoUrl = `${appBaseURL}/intro.mp4`;
  const videoPosterUrl = `${appBaseURL}/images/intro-poster.png`;

  return (
    <>
      <Head
        canonical="/"
        page="about"
        openGraph={{
          videos: [
            {
              url: videoUrl,
              width: 600,
              height: 338,
              alt: videoTitle,
              type: "video/mp4",
              secureUrl: videoUrl,
            },
          ],
        }}
      />
      <VideoJsonLd
        name={videoTitle}
        description={videoDesc}
        contentUrl={videoUrl}
        uploadDate="2022-03-24"
        duration="PT58S"
        thumbnailUrls={[videoPosterUrl]}
      />
      <SocialProfileJsonLd
        type="Person"
        name={t("home.profile.name")}
        url={appBaseURL}
        sameAs={[contactOptions.find((opt) => opt.type === "linkedin").value]}
      />
      <Div width="100%" py="3">
        <PageTitle title="about.title" />
        <WhoAmI videoTitle={videoTitle} />
        <Div id="work-experience">
          <Timeline
            title="about.workExperience.title"
            icon="suitcase"
            sections={workExperienceTimelineSections}
          />
        </Div>
        <Timeline
          title="about.timeline.title"
          sections={aboutTimelineSections}
        />
        <Div id="education">
          <Timeline
            title="about.education.title"
            icon="education"
            sections={educationTimelineSections}
          />
        </Div>
      </Div>
    </>
  );
};

export default AboutPage;
