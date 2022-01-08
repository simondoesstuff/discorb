import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import Image from "next/image";

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
function FeatureCard({title, description, imageSrc, variant = "right"}) {
  let direction;

  if (variant === "left") {
    direction = "row-reverse"
  } else if (variant === "right") {
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
        <Stack
          direction={direction}
          justifyContent="spaceBetween"
          alignItems="center"
          spacing={10}
          p={'7.5rem 2.5rem'}
        >
          {/*Featured Image*/}
          <Image src={imageSrc}/>

          <Container maxWidth='xs'>
            {/*Title*/}
            <Typography
              variant='h3'
              fontFamily={theme => theme.discordFonts.display}
            >
              {title}
            </Typography>

            {/*Description*/}
            <Typography
              variant='subtitle1'
              marginTop={1.5}
            >
              {description}
            </Typography>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
}

export default FeatureCard;