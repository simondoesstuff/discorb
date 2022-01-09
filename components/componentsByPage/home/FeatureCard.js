import React from 'react';
import {Box, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import Image from "next/image";
import * as PropTypes from "prop-types";

/**
 * Used to display discord's feature
 * blocks in the home page.
 *
 * @param title
 * @param description
 * @param imageSrc The featured image src
 * @param variant "left" or "right".
 * Right aligns the text to the right (picture left).
 * Left aligns in opposite fashion and slightly darkens the background.
 * Defaults to "right".
 * @returns {JSX.Element}
 * @constructor
 */
function FeatureCard(props) {
  const {title, description, imageSrc, variant = "right"} = props;

  const onBigScreen = useMediaQuery((theme => theme.breakpoints.up('md')));

  // if we are on a small+ sized screen
  if (onBigScreen) {
    return (
      <BigVersion {...props}/>
    )
  }

  // we are on a small sized screen

  return (
    <SmallVersion {...props}/>
  )
}

function SmallVersion({title, description, imageSrc, variant = "right"}) {
  return (
    <Box
      sx={{
        bgcolor: (variant === "left" ?
            theme => theme.discordPalette.offWhite :
            null
        ),
        color: (theme => theme.discordPalette.gray)
      }}
    >
      <Container
        sx={{
          p: '3.5rem 1.5rem'
        }}
      >

        {/*Featured Image*/}
        <Image src={imageSrc}/>

        {/*Title*/}
        <Typography
          variant="h4"
          fontFamily={theme => theme.discordFonts.display}
        >
          {title}
        </Typography>

        {/*Description*/}
        <Typography
          variant="body1"
          marginTop={1.5}
        >
          {description}
        </Typography>
      </Container>
    </Box>
  )
}

function BigVersion({title, description, imageSrc, variant = "right"}) {
  let direction;

  if (variant === "left") {
    direction = "row-reverse"
  } else
    // if (variant === "right")
  {
    direction = "row"
  }

  return (
    <Box
      sx={{
        bgcolor: (variant === "left" ?
            theme => theme.discordPalette.offWhite :
            null
        ),
        color: (theme => theme.discordPalette.gray)
      }}
    >
      <Container>
        <Grid
          container
          direction={direction}
          justifyContent="space-between"
          alignItems="center"
          p={'7.5rem 2.5rem'}
        >
          {/*Featured Image*/}
          <Grid item xs={7}>
            <Image src={imageSrc}/>
          </Grid>


          <Grid item maxWidth='xs' xs={4}>
            {/*Title*/}
            <Typography
              variant="h2"
              fontFamily={theme => theme.discordFonts.display}
            >
              {title}
            </Typography>

            {/*Description*/}
            <Typography
              variant="h6"
              marginTop='1.5rem'
            >
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


export default FeatureCard;