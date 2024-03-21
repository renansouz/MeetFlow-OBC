import { useState } from 'react';

import { MultiStep } from '@/components/multiStep';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';

import { Step1, Step2, Step3, StepNavigator } from './Step';
import { BackGroundDiv, FormDiv } from './styles';

export const Register = () => {
    const { theme } = useTheme();

    const [currentStepState, setCurrentStepState] = useState<number>(1);

    return (
        <div className="flex h-screen w-full">
            <BackGroundDiv>
                <div className="flex w-1/2 flex-col items-center justify-center gap-20 ">
                    <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    <h1 className="text-center text-5xl font-semibold">Junte-se à comunidade MeetFlow</h1>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                    <FormDiv>
                        <MultiStep size={3} currentStep={currentStepState} text={['Conta', 'Disponibilidade', 'Serviços']} />

                        {currentStepState === 1 ? <Step1 /> : null}
                        {currentStepState === 2 ? <Step2 /> : null}
                        {currentStepState === 3 ? <Step3 /> : null}

                        <StepNavigator currentStepState={currentStepState} setCurrentStepState={setCurrentStepState} />
                    </FormDiv>
                </div>
            </BackGroundDiv>
        </div>
    );
};
