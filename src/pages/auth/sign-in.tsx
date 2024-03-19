import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import { Container,Title } from './sing-in';

export function SignIn() {
  return (
      <Container>
          <Title>Testando titulo</Title>
        <Button>
          <Link to="/"> Ir para Dashboard </Link>
        </Button>
      </Container>
  )
} 