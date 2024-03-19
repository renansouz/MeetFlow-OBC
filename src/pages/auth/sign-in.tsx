import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export function SignIn() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>SignIn</h1>
      <Button>
        <Link to="/"> Ir para Dashboard </Link>
      </Button>
    </div>
  )
} 