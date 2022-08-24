import PaymentMethodInput from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';

const PaymentMethodOptions: React.FC = () => {
 return (
   <PaymentMethodOptionsContainer>
    <PaymentMethodInput/>
    <PaymentMethodInput/>
    <PaymentMethodInput/>
   </PaymentMethodOptionsContainer>
 );
}

export default PaymentMethodOptions;
