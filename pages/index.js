import React from 'react';
import HomeHeadlineShowcase from "@/components/pageHeadlineShowcases/HomeHeadlineShowcase";
import FeatureCard from "@/components/FeatureCard";
import {Box, Container, Stack, Typography} from "@mui/material";
import Image from 'next/image';

import svgInviteOnlyPlace from "@/public/pageAssets/homePage/featureCardSvgs/inviteOnlyPlace.svg";
import svgHangOutEasy from "@/public/pageAssets/homePage/featureCardSvgs/hangOutEasy.svg";
import svgFewToFandom from "@/public/pageAssets/homePage/featureCardSvgs/fewToFandom.svg";
import svgReliableTech from "@/public/pageAssets/homePage/reliableTech.svg";

function HomePage(props) {
  return (
    <>
      <HomeHeadlineShowcase/>

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

      <ReliableTechCard/>
    </>
  );
}

function ReliableTechCard() {
  return (
    <Box
      sx={{
        bgcolor: theme => theme.discordPalette.offWhite,
        color: theme => theme.discordPalette.gray
      }}
    >
      <Container
        p={'7.5rem 2.5rem'}
        sx={{
          textAlign: 'center'
        }}
      >

        {/*'RELIABLE TECH'... title*/}
        <Typography
          variant='h3'
          fontFamily={theme => theme.discordFonts.headline}
        >
          RELIABLE TECH FOR STAYING CLOSE
        </Typography>

        {/*Subtitle*/}
        <Typography
          variant='subtitle1'
          marginTop={1.5}
        >
          Low-latency voice and video feels like you’re
          in the same room. Wave hello over video, watch
          friends stream their games, or gather up and
          have a drawing session with screen share.
        </Typography>

        {/*Graphic Image*/}
        <Image
          src={svgReliableTech}
        />

        {/*Sparkle Text + Button*/}
        <SparkleDownload/>
      </Container>
    </Box>
  )
}

function SparkleDownload() {
  return 'Sparkles'
}

export default HomePage;