import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';
import { BackGroundDiv, FormDiv } from './styles';
<<<<<<< HEAD:src/pages/Register/index.tsx
import { useState } from 'react';
import { MultiStep } from '@/components/MultiStep';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { StepNavigator } from './StepNavigator';

export const Register = () => {
=======
export const ProfessionalRegister = () => {
>>>>>>> 2b7b9766738ab67b1170d142a3ea6036df4c58bb:src/pages/professional/ProfessionalRegister/index.tsx
    const { theme } = useTheme();

    const [currentStepState, setCurrentStepState] = useState<number>(1);

    return (
<<<<<<< HEAD:src/pages/Register/index.tsx
        <div className="flex w-full h-screen">
            <BackGroundDiv>
                <div className="flex flex-col gap-20 justify-center items-center w-1/2 ">
=======
        <div className="flex h-screen w-full ">
            <BackGroundDiv>
                <div className="flex w-1/2 flex-col items-center justify-center gap-20  max-xl:hidden">
>>>>>>> 2b7b9766738ab67b1170d142a3ea6036df4c58bb:src/pages/professional/ProfessionalRegister/index.tsx
                    <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    <h1 className="text-5xl text-center font-semibold">Junte-se à comunidade MeetFlow</h1>
                </div>
<<<<<<< HEAD:src/pages/Register/index.tsx
                <div className="w-1/2 flex justify-center items-center">
=======
                <div className="flex w-1/2 items-center justify-center max-xl:w-screen">
>>>>>>> 2b7b9766738ab67b1170d142a3ea6036df4c58bb:src/pages/professional/ProfessionalRegister/index.tsx
                    <FormDiv>
                        <MultiStep size={3} currentStep={currentStepState} text={['Conta', 'Disponibilidade', 'Serviços']} />

                        {currentStepState === 1 ? <Step1/> : null}
                        {currentStepState === 2 ? <Step2/> : null}
                        {currentStepState === 3 ? <Step3/> : null}

                        <StepNavigator currentStepState={currentStepState} setCurrentStepState={setCurrentStepState} />
                    </FormDiv>
                </div>
            </BackGroundDiv>
        </div>
    );
};
