import { useState } from 'react';

import { MultiStep } from '@/components/multiStep';
import LightLogo from '@/public/img/only-logo-white.svg';

import { Step1, Step2, Step3 } from './step';
import { BackGroundDiv } from './styles';

export const ProfessionalRegister = () => {
    const [currentStepState, setCurrentStepState] = useState<number>(3);

    return (
        <div className="flex h-full w-full bg-card">
            <div className="flex w-1/2 flex-col items-center justify-center max-xl:w-full">
                <div className="flex flex-col  items-center justify-center rounded-xl border-2 border-slate-800 bg-card p-20">
                    <MultiStep size={3} currentStep={currentStepState} text={['Conta', 'Disponibilidade', 'Serviços']} />
                    {currentStepState === 1 ? <Step1 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                    {currentStepState === 2 ? <Step2 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                    {currentStepState === 3 ? <Step3 setCurrentStepState={setCurrentStepState} currentStepState={currentStepState} /> : null}
                </div>
            </div>
            <div className="flex h-screen w-1/2 items-center justify-center gap-20 max-xl:hidden">
                <BackGroundDiv>
                    <img src={LightLogo} />
                    <h1 className="text-center font-semibold text-white">Junte-se à comunidade MeetFlow</h1>
                </BackGroundDiv>
            </div>
        </div>
    );
};
