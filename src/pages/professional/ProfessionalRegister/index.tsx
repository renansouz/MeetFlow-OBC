import { useState } from 'react';

import { MultiStep } from '@/components/multiStep';
import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/img/Logo.svg';
import LightLogo from '@/public/img/Logo-light.svg';

import { Step1, Step2, Step3 } from './step';
import { BackGroundDiv, FormDiv } from './styles';

export const ProfessionalRegister = () => {
    const { theme } = useTheme();

    const [currentStepState, setCurrentStepState] = useState<number>(1);

    return (
        <div className="flex h-screen w-full ">
            <BackGroundDiv>
                <div className="flex w-1/2 flex-col items-center justify-center gap-20  max-xl:hidden">
                    <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    <h1 className="text-center font-semibold">Junte-se à comunidade MeetFlow</h1>
                </div>

                <div className="flex w-1/2 items-center justify-center max-xl:w-screen">
                    <FormDiv>
                        <MultiStep size={3} currentStep={currentStepState} text={['Conta', 'Disponibilidade', 'Serviços']} />

                        {currentStepState === 1 ? <Step1 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                        {currentStepState === 2 ? <Step2 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                        {currentStepState === 3 ? <Step3 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                    </FormDiv>
                </div>
            </BackGroundDiv>
        </div>
    );
};
