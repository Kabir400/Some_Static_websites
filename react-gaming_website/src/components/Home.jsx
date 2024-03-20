import React from 'react';

import MyCarousel from './MyCarousel';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import five from '../img/five.png';

export default function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'}>
        <Heading
          borderBottom={'2px solid'}
          py={'2'}
          textTransform={'uppercase'}
          margin={'auto'}
          width={'fit-content'}
          fontSize={'22px'}
          marginTop={'20px'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'column', 'column', 'row']}
        >
          <Image
            src={five}
            filter={'hue-rotate(-130deg)'}
            h={['230px', '350px']}
          ></Image>
          <Text
            ml={'10px'}
            letterSpacing={'4px'}
            lineHeight={'25px'}
            textAlign={['center', 'center', 'center', 'left']}
            p={['4', '4', '4', '16']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt
            pariatur tenetur aut, molestiae quaerat dolor explicabo itaque
            excepturi rem officia eveniet corporis asperiores, ab incidunt quam,
            iste ullam hic dicta blanditiis libero magnam? Nemo eaque sit sequi,
            quaerat qui harum. Pariatur minus ratione fugit odit culpa
            repudiandae quas aliquid libero rerum a fuga iure, consequuntur
            suscipit molestiae quisquam iusto dolor cumque. Minus quas
            reiciendis recusandae maiores! Cupiditate expedita aspernatur ipsam
            adipisci est corrupti distinctio debitis quae at rerum quo quasi
            laborum alias labore consequuntur, dicta sunt, quod maiores? Id
            nobis numquam aut minima nesciunt blanditiis dolorem tempore quis
            adipisci.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
