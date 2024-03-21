import { Button } from '@/components/ui/button';
import { stepProps } from '@/types/StepsTypes';
import { Link } from 'react-router-dom';

export const StepNavigator = ({ setCurrentStepState, currentStepState } : stepProps ) => {
    return (
        <div className="flex justify-between px-10">
            <Link to={'/'} className=" border-solid border-2 border-indigo-700  items-center justify-center rounded-md px-5 py-2 bg-white text-2xl text-indigo-700">
                Voltar
            </Link>
            <Button className='rounded-md px-6 py-2 h-12' onClick={() => setCurrentStepState(currentStepState + 1)}>
            Continuar
            </Button>
            <button className="bg-indigo-700 text-white rounded-md px-6 py-2" onClick={() => setCurrentStepState(currentStepState + 1)}>
                Continuar
            </button>
        </div>
    );
};
