import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Video() {
  const videosArr = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
  ];

  let [videoSrc, setvideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']}>
      <VStack w={'full'}>
        <video
          src={videoSrc}
          controls
          controlsList="nodownload"
          style={{ width: '100%' }}
        ></video>
        <VStack
          alignItems={'flex-start'}
          width={'full'}
          p={'5px'}
          style={{ marginLeft: '24px' }}
        >
          <Heading fontSize={'20px'}>Sample video 1</Heading>
          <Text style={{ marginBottom: '20px' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            quaerat alias earum exercitationem tempore praesentium, repellat
            quas est nulla mollitia sit architecto repudiandae officiis officia
            consequuntur numquam amet facere ullam ex autem voluptatibus maxime
            ab dolore itaque. Voluptate illum unde eaque illo facere ipsam alias
            eligendi sapiente omnis delectus fugiat doloribus, quasi dolorem
            aperiam similique? Voluptatum nesciunt pariatur mollitia.
            Consectetur veniam labore corporis officia odit, delectus amet eum
            cum ad dolore quasi vitae quo ipsum quia adipisci incidunt facere
            provident nostrum laudantium magni ipsam nobis earum blanditiis!
            Quia, ea quisquam soluta saepe id delectus assumenda, aspernatur
            tempore odit atque nulla.
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} style={{ marginBottom: '24px' }}>
        {videosArr.map((item, index) => (
          <Button
            colorScheme="purple"
            variant={'ghost'}
            marginTop={'27px'}
            fontWeight={'600'}
            width={'75%'}
            onClick={() => setvideoSrc(videosArr[index])}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}
