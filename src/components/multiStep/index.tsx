export interface MultiStepProps {
  size: number
  currentStep?: number
  text: string
}

export function MultiStep({ size, currentStep = 1, text }: MultiStepProps) {
  return (
    <div>
      <div>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => {
          return (
            <div
              key={step}
              className={`h-2 w-2 rounded-full border-2 border-gray-400 ${currentStep >= step ? 'bg-green-500' : 'bg-gray-200'
                }`}
            />
          )
        })}
      </div>
      <span className="text-xs text-gray-500">{text}</span>
    </div>
  )
}