import {Link} from 'react-router-dom';

import { Button } from '@/components/ui/button';

export function Dashboard (){
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Dashboard</h1>
      <Button> 
        <Link to="sign-in"> Ir para Sign-in</Link> 
      </Button>
    </div>
  )
}