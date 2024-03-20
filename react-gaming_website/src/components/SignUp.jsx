import React from 'react';
import {
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Button,
  Avatar,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['80%', '96']}
        m={'auto'}
        my={['24', '16']}
      >
        <Heading fontSize={'28px'}>Video Hub</Heading>

        <Input
          type="text"
          required
          placeholder="Name"
          focusBorderColor="purple.500"
        />

        <Input
          type="email"
          required
          placeholder="Email"
          focusBorderColor="purple.500"
        />
        <Input
          type="password"
          required
          placeholder="Password"
          focusBorderColor="purple.500"
        />
        <Input
          type="password"
          required
          placeholder="Conform Password"
          focusBorderColor="purple.500"
        />

        <Button colorScheme="purple" type="submit">
          <Link to={'/login'}>Sign Up</Link>
        </Button>
        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/login'}>Alreay A User? Login</Link>
        </Button>
      </VStack>
    </Container>
  );
}
