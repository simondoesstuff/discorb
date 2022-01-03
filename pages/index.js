import React from 'react';
import {Container, Typography} from "@mui/material";


// todo nitro video:
/*

<video
        autoPlay
        loop
        style={{
          width: '100%',
          zIndex: -1,
          top: 0,
          position: 'absolute'
        }}
      >
        <source src="/discordBanners/NitroAnimatedBanner.mp4"/>
      </video>

 */


function Home(props) {
  return (
    <>
      {/*Banner*/}
      <video
        autoPlay
        loop
        style={{
          width: '100%',
          zIndex: -1,
          top: 0,
          position: 'absolute'
        }}
      >
        <source src="/discordBanners/NitroAnimatedBanner.mp4"/>
      </video>

      <Container>
        <Typography variant={'h1'}>
          Imagine
        </Typography>
      </Container>
    </>
  );
}

export default Home;