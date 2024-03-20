import {
  Button,
  Container,
  HStack,
  Input,
  VStack,
  Box,
} from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import React from 'react';

export default function Upload() {
  let inputChangeHandler = e => {
    var filename = e.target.value;
    document.getElementById('span').textContent = `${filename}`;
  };
  return (
    <Container h={'100vh'} maxW={'container.xl'}>
      <VStack h={'full'} justifyContent={'center'} color={'purple.500'}>
        <AiOutlineCloudUpload size={'200px'} />
        <form>
          <HStack>
            <Box id="span"></Box>
            <Input
              required
              type="file"
              display={'none'}
              id="upload"
              onChange={inputChangeHandler}
            />
            <Button
              colorScheme="purple"
              variant={'ghost'}
              onClick={() => {
                document.getElementById('upload').click();
              }}
            >
              {' '}
              Select
            </Button>
            <Button colorScheme="purple" variant={'ghost'} type="submit">
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
}
