import { ChevronRight } from 'lucide-react';

import { DivRepeat, Label, MultiStepContainer, Step, Steps } from './styles';

export interface MultiStepProps {
    size: number;
    $currentStep?: number;
    text: string[];
}

export function MultiStep({ size, $currentStep = 1, text }: MultiStepProps) {
    return (
        <div className="mb-10 flex justify-start bg-card">
            <MultiStepContainer>
                <Steps>
                    {Array.from({ length: size }, (_, i) => i + 1).map((step, index) => {
                        return (
                            <DivRepeat key={index}>
                                <Step
                                    $active={$currentStep >= step}
                                    $stepcontent={step}
                                    $currentStep={$currentStep}
                                />
                                <Label $active={$currentStep >= step}>{text[step - 1]}</Label>
                                {step !== size && (
                                    <ChevronRight className="h-8 w-8 text-foreground" />
                                )}
                            </DivRepeat>
                        );
                    })}
                </Steps>
            </MultiStepContainer>
        </div>
    );
}
