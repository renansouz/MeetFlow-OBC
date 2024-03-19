import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes'

function App() {
  return (
    <>
      <ThemeProvider storageKey='MeetFlow-theme' defaultTheme='dark'>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
