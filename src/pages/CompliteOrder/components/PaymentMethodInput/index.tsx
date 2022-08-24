import { CreditCard } from 'phosphor-react';
import { PaymentMethodInputContainer } from './styles';

const PaymentMethodInput: React.FC = () => {
 return (
   <PaymentMethodInputContainer>
    <CreditCard size={16} />
    Cartão de crédito
   </PaymentMethodInputContainer>
 );
}

export default PaymentMethodInput;
