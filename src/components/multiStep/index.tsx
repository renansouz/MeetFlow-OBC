import { ChevronRight } from 'lucide-react';

import { DivRepeat, Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
    size: number;
    currentStep?: number;
    text: string[];
}

export function MultiStep({ size, currentStep = 1, text }: MultiStepProps) {
    return (
        <div className="max-md:pt-40 relative">
            <MultiStepContainer>
                <Steps>
                    {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
                        return (
                            <>
                                <DivRepeat>
                                    <Step key={step} active={currentStep >= step} stepContent={step} currentStep={currentStep} />
                                    <Label active={currentStep >= step}>{text[step - 1]}</Label>
                                    {step !== size && <ChevronRight className="h-8 w-8 text-black" />}
                                </DivRepeat>
                            </>
                        );
                    })}
                </Steps>
            </MultiStepContainer>
        </div>
    );
}
