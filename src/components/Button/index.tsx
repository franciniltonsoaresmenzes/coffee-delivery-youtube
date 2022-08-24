import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number
}

const Button: React.FC<ButtonProps> = ({ text, ...props }) => {
 return (
   <ButtonContainer {...props}>
     {text}
   </ButtonContainer>
 );
}

export default Button;
