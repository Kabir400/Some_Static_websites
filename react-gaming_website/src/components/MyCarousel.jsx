import React from 'react';

import Mycarousel from './Mycarousel.css';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';
import four from '../img/four.jpg';

import { Heading, Image, Box, position } from '@chakra-ui/react';
import { transform } from 'framer-motion';
let headingOptions = {
  bgColor: 'blackAlpha.600',
  color: 'white',
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
};
export default function MyCarousel() {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <Box w={'full'} h="100vh" className="box">
          <Image src={one} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading {...headingOptions}>Gaming Is Future</Heading>
        </Box>
        <Box w={'full'} h="100vh">
          <Image src={two} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading {...headingOptions}>Gaming Is Future</Heading>
        </Box>
        <Box w={'full'} h="100vh">
          <Image src={three} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading {...headingOptions}>Gaming Is Future</Heading>
        </Box>
        <Box w={'full'} h="100vh">
          <Image src={four} w={'full'} h={'full'} objectFit={'cover'} />
          <Heading {...headingOptions}>Gaming Is Future</Heading>
        </Box>
      </Carousel>
    </>
  );
}
