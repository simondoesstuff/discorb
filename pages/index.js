import React from 'react';
import HeadlineText from "@/components/componentsByPage/home/HeadlineText";
import FeatureCard from "@/components/componentsByPage/home/FeatureCard";

import svgInviteOnlyPlace from "@/public/pageAssets/homePage/featureCardSvgs/inviteOnlyPlace.svg";
import svgHangOutEasy from "@/public/pageAssets/homePage/featureCardSvgs/hangOutEasy.svg";
import svgFewToFandom from "@/public/pageAssets/homePage/featureCardSvgs/fewToFandom.svg";
import ReliableTechSection from "@/components/componentsByPage/home/ReliableTechSection";
import DiscordDefaultLayout from "@/components/layouts/NavFooterLayout/DiscordDefaultLayout";
import HeroBanner from "@/components/componentsByPage/home/HeroBanner";

function HomePage() {
  return (
    <>
      {/*   Feature Section - 3 cards + "Reliable Tech" section   */}

      <FeatureCard
        title="Create an invite-only place where you belong"
        description="Discord servers are organized into topic-based
        channels where you can collaborate, share, and just talk
        about your day without clogging up a group chat."
        imageSrc={svgInviteOnlyPlace}
      />

      <FeatureCard
        title="Where hanging out is easy"
        description="Grab a seat in a voice channel when you’re free.
        Friends in your server can see you’re around and instantly pop
        in to talk without having to call."
        imageSrc={svgHangOutEasy}
        variant="left"
      />

      <FeatureCard
        title="From few to a fandom"
        description="Get any community running with moderation tools and
        custom member access. Give members special powers, set up private
        channels, and more."
        imageSrc={svgFewToFandom}
      />

      <ReliableTechSection/>
    </>
  );
}

HomePage.getLayout = (page) => (
  <DiscordDefaultLayout
    bannerColor='#404eed'
    headerChildren={
      <>
        <HeadlineText/>
        <HeroBanner/>
      </>
    }
  >
    {page}
  </DiscordDefaultLayout>
)

export default HomePage;