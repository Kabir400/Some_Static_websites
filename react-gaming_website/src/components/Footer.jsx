import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AiOutlineSend } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
export default function Footer() {
  return (
    <div>
      <Box backgroundColor={'purple.900'} color={'white'} minH={'40'} p={'16'}>
        <Stack direction={['column', 'column', 'row']}>
          <VStack alignItems={'stretch'} width={'full'}>
            <Heading
              textTransform={'uppercase'}
              fontSize={['20px', '24px', '20px']}
              textAlign={['center', 'center', 'left']}
            >
              Subscribes to get updates
            </Heading>
            <HStack
              borderBottom={'2px solid white'}
              py={'2'}
              style={{ marginBottom: '13px' }}
            >
              <Input
                placeholder="Entre Your Email Here..."
                borderRadius={'none'}
                outline={'none'}
                border={'none'}
                type="email"
              />
              <Button
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                height={'28px'}
              >
                <AiOutlineSend fontSize={'16px'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            width={'full'}
            borderLeft={['none', 'none', '2px solid white']}
            borderRight={['none', 'none', '2px solid white']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              Video Hub
            </Heading>
            <Text>@All Right Reserved</Text>
          </VStack>
          <VStack width={'full'}>
            <Heading
              textTransform={'uppercase'}
              textAlign={'center'}
              fontSize={'24px'}
            >
              Social Media
            </Heading>
            <HStack style={{ marginTop: '10px' }}>
              <Button variant={'ghost'}>
                <FaFacebook fontSize={'30px'} />
              </Button>
              <Button variant={'ghost'}>
                <AiFillInstagram fontSize={'30px'} />
              </Button>
              <Button variant={'ghost'}>
                <AiFillGithub fontSize={'30px'} />
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </div>
  );
}
