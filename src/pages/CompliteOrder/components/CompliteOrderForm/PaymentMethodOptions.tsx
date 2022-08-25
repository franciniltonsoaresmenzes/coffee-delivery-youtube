import { Bank, CreditCard, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Header/typography';
import PaymentMethodInput from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';

export const paymentMethods = {
  credit: {
    label: "Cartão de credito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de debito",
    icon: <Bank size={16} />
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} /> ,
  },
}

const PaymentMethodOptions: React.FC = () => {
 const { register, formState: { errors } } = useFormContext()

 const paymentmethodsError = errors?.paymentMethod?.message as unknown as string

 return (
   <PaymentMethodOptionsContainer>
    {Object.entries(paymentMethods).map(([key, {label, icon}]) => (
      <PaymentMethodInput
        key={label}
        id={label}
        icon={icon}
        label={label}
        value={key}
        {...register("paymentMethod")}
      />
    ))}
    { paymentmethodsError && <RegularText>{paymentmethodsError}</RegularText> }
   </PaymentMethodOptionsContainer>
 );
}

export default PaymentMethodOptions;
