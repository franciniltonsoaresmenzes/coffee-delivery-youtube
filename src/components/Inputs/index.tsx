import { forwardRef, InputHTMLAttributes } from 'react';
import { RegularText } from '../Header/typography';
import { InputsContainer, InputStyled, InputWrapper, RightText } from './styles';

type InputsProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  rightText?: string
}

const Input = forwardRef<HTMLInputElement, InputsProps>(
  ({error, className, rightText, ...props}, ref) => {
    return(
      <InputWrapper className={className} >
        <InputsContainer hasError={!!error} >
          <InputStyled  {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputsContainer> 
        {error && (
          <RegularText size='s' >{error}</RegularText>
        )}
      </InputWrapper>
    );
  }
)

export default Input
