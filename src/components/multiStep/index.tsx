import { MultiStepContainer, Step, Steps, Label, DivRepeat } from "./styles"

import { ChevronRight } from "lucide-react"

export interface MultiStepProps {
  size: number
  currentStep?: number
  text: string[]
}

export function MultiStep({ size, currentStep = 1, text }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Steps>
        {Array.from({ length: size }, (_, i) => i + 1).map(step => {
          return (
            <>
                <DivRepeat>
                    <Step key={step} active={currentStep >= step} stepContent = {step} currentStep={currentStep}/>
                    <Label active={currentStep >= step}>{text[step - 1]}</Label>
                                  {step !== size && <ChevronRight className="w-8 h-8 text-black" />}
                </DivRepeat>
            </>
          )
        })}
      </Steps>
    </MultiStepContainer>
  )
}
