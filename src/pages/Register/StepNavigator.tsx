import { stepProps } from '@/types/StepsTypes';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';


export const StepNavigator = ({ setCurrentStepState, currentStepState }: stepProps) => {
    const navigate = useNavigate();

    const handleStepBack = () => (currentStepState === 1 ? navigate('/') : setCurrentStepState(currentStepState - 1));

    return (
        <div className="w-full flex justify-between px-10 absolute bottom-5 left-0">
            <Button variant={'costumize'} onClick={() => handleStepBack()}>
                Voltar
            </Button>
            <Button onClick={() => setCurrentStepState(currentStepState + 1)}>Continuar</Button>
        </div>
    );
};
