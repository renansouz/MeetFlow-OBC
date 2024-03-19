import { ThemeToggle } from './theme/theme-toggle'

export function Header () {
  return (
    <div className="border-b">
      {/* border-b - border-bottom */}
      <div className="flex h-16 items-center gap-6 px-6">
        {/* h-16 fixa altura do header em 64px */}
      <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>  
    </div>
  )
}