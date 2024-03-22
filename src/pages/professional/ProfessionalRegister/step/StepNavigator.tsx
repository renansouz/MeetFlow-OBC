import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { stepProps } from '@/types/StepsTypes';

export const StepNavigator = ({ setCurrentStepState, currentStepState }: stepProps) => {
    const navigate = useNavigate();

    const handleStepBack = () => (currentStepState === 1 ? navigate('/') : setCurrentStepState(currentStepState - 1));

    return (
        <div className="flex justify-center gap-48 py-10">
            <Button variant={'costumize'} onClick={() => handleStepBack()}>
                Voltar
            </Button>
            <Button onClick={() => setCurrentStepState(currentStepState + 1)}>Continuar</Button>
        </div>
    );
};
