import { useState } from 'react';

import { MultiStep } from '@/components/multiStep';

import { Step1, Step2, Step3 } from './step';
import { BackGroundDiv } from './styles';

export const ProfessionalRegisterGoogle = () => {
  const [currentStepState, setCurrentStepState] = useState(2);

  return (
    <div className="flex h-full w-full bg-card">
      <div className="flex h-screen w-1/2 max-xl:hidden">
        <BackGroundDiv>
          <h1 className="text-center text-5xl font-bold text-white">
            SEJA BEM VINDO AO <br /> MEET FLOW
          </h1>
        </BackGroundDiv>
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center max-xl:h-full max-xl:w-full">
        <div className="flex min-h-[80%] w-[75%] flex-col items-center justify-center rounded-xl border border-border bg-card pt-5 max-xl:w-[46rem] max-lg:border-none">
          <MultiStep
            size={3}
            $currentStep={currentStepState}
            text={['Conta', 'Disponibilidade', 'Serviços']}
          />
          {currentStepState === 1 ? (
            <Step1
              setCurrentStepState={setCurrentStepState}
              currentStepState={currentStepState}
              key={'1'}
            />
          ) : null}
          {currentStepState === 2 ? (
            <Step2
              setCurrentStepState={setCurrentStepState}
              currentStepState={currentStepState}
              key={'2'}
            />
          ) : null}
          {currentStepState === 3 ? (
            <Step3
              setCurrentStepState={setCurrentStepState}
              currentStepState={currentStepState}
              key={'3'}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
