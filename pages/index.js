import React from 'react';
import HomeHeadlineShowcase from "@/components/pageHeadlineShowcases/HomeHeadlineShowcase";
import FeatureCard from "@/components/FeatureCard";
import {Box, Container, Stack, Typography} from "@mui/material";
import DiscordButton from "@/components/DiscordButton";
import DownloadIcon from "@mui/icons-material/Download";
import Image from 'next/image';

import svgInviteOnlyPlace from "@/public/pageAssets/homePage/featureCardSvgs/inviteOnlyPlace.svg";
import svgHangOutEasy from "@/public/pageAssets/homePage/featureCardSvgs/hangOutEasy.svg";
import svgFewToFandom from "@/public/pageAssets/homePage/featureCardSvgs/fewToFandom.svg";
import svgReliableTech from "@/public/pageAssets/homePage/reliableTech.svg";
import svgSparkles from "@/public/pageAssets/homePage/sparkles.svg";

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
        sx={{
          p: '7.5rem 0',
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
        <Box marginTop={1}>
          <Image src={svgReliableTech}/>
        </Box>


        {/*Sparkle Text + Button*/}
        <Box marginTop={10}>
          <SparkleDownload/>
        </Box>
      </Container>
    </Box>
  )
}

function SparkleDownload() {
  return (
    <>
      {/*Sparkle Text*/}
      <Box
        sx={{
          position: 'relative',
          paddingTop: '30px'
        }}
      >
        <Container
          sx={{
            // the sparkles are overlayed by
            // 'absolute'ly raising them
            // above the text
            position: 'absolute',
            top: 0
          }}
        >
          <Image src={svgSparkles}/>
        </Container>

        <Typography
          fontSize='2rem'
          fontFamily={theme => theme.discordFonts.display}
        >
          Ready to start your journey?
        </Typography>
      </Box>


      {/*Download for Windows Button*/}
      <DiscordButton
        variant='blue'
        sx={{
          marginTop: 5
        }}
      >
        <DownloadIcon sx={{marginRight: 1}}/>
        <Typography variant='h6'>
          Download for Windows
        </Typography>
      </DiscordButton>
    </>
  )
}

export default HomePage;