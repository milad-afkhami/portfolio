import Div from "@kits/Div";
import Timeline from "@kits/Timeline";
import Head from "@components/SEO/Head";
import PageTitle from "@components/Layout/Title/Page";
import AboutWhoAmI from "@components/About/WhoAmI";
import { SocialProfileJsonLd, VideoJsonLd } from "next-seo";
import useTranslation from "@hooks/useTranslation";
import I18nHelper from "@helpers/i18n";
import {
  workExperienceTimelineSections,
  educationTimelineSections,
  aboutTimelineSections,
} from "@configs/about";
import { appBaseURL } from "@configs/urls";
import contactOptions, { ContactType } from "@configs/contact";
import type { GetStaticProps } from "next";
import type { PageComponent } from "@_types/components";

const AboutPage: PageComponent = () => {
  const { t } = useTranslation("about");
  const videoTitle = t("video.title");
  const videoDesc = t("video.desc");
  const videoUrl = `${appBaseURL}/intro.mp4`;
  const videoPosterUrl = `${appBaseURL}/images/intro-poster.png`;
  const linkedInProfile = contactOptions.find(
    (opt) => opt.type === ContactType.Linkedin
  )!.value;

  return (
    <>
      <Head
        canonical="/about"
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
        name={t("app.title")}
        url={appBaseURL}
        sameAs={[linkedInProfile]}
      />
      <Div width="100%" py="3">
        <PageTitle title="title" ns="about" />
        <AboutWhoAmI videoTitle={videoTitle} />
        <Div id="work-experience">
          <Timeline
            ns="about"
            title="workExperience.title"
            icon="suitcase"
            sections={workExperienceTimelineSections}
          />
        </Div>
        <Timeline
          ns="about"
          title="timeline.title"
          sections={aboutTimelineSections}
        />
        <Div id="education">
          <Timeline
            ns="about"
            title="education.title"
            icon="education"
            sections={educationTimelineSections}
          />
        </Div>
      </Div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [t9n] = await Promise.all([
    I18nHelper.ssrT9n(locale, "layout", "about"),
  ]);

  return { props: { ...t9n } };
};

export default AboutPage;
