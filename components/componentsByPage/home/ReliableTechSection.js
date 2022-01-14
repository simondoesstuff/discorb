import React from 'react';
import {Box, Container, Typography, useMediaQuery} from "@mui/material";
import Image from "next/image";
import svgReliableTech from "@/public/pageAssets/homePage/reliableTech.svg";
import svgSparkles from "@/public/pageAssets/homePage/sparkles.svg";
import DiscordButton from "@/components/DiscordButton";
import DownloadIcon from "@mui/icons-material/Download";

function ReliableTechSection() {
  const onBigScreen = useMediaQuery((theme => theme.breakpoints.up('sm')));

  return (
    <Box
      sx={{
        bgcolor: theme => theme.discordPalette.offWhite,
        color: theme => theme.discordPalette.gray
      }}
    >
      <Container
        sx={{
          p: {
            xs: '3.5rem 1rem',
            md: '7.5rem 0'
          },
          textAlign: 'center'
        }}
      >

        {/*Text Header*/}
        <Container maxWidth='md'>

          {/*Title*/}
          <Typography
            variant={onBigScreen ? 'h3' : 'h6'}
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
        </Container>

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
          variant='h3'
          fontFamily={theme => theme.discordFonts.display}
        >
          Ready to start your journey?
        </Typography>
      </Box>


      {/*Download for Windows Button*/}
      <DiscordButton
        variant='blue'
        sx={{
          marginTop: 5,
          p: '0.5rem 1.5rem'
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

export default ReliableTechSection;