import {
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['80%', '96']}
        m={'auto'}
        my={['24', '16']}
      >
        <Heading fontSize={'28px'}>Welcome Back</Heading>
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
        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to={'/forgotpassword'}>Forgot Password?</Link>
        </Button>
        <Button colorScheme="purple" type="submit">
          Log In
        </Button>
        <Button variant={'link'} alignSelf={'flex-start'}>
          <Link to={'/signup'}>New User? Sign Up</Link>
        </Button>
      </VStack>
    </Container>
  );
}
