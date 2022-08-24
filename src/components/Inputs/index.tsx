import { InputHTMLAttributes } from 'react';
import { InputsContainer } from './styles';

type InputsProps = InputHTMLAttributes<HTMLInputElement>;

const Inputs: React.FC<InputsProps> = ({ ...props }) => {
 return <InputsContainer {...props}/>;
}

export default Inputs;
