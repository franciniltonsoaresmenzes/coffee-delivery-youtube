import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { TitleText } from '../../../../components/Header/typography';
import SectionTitle from '../SectionTitle';
import AdressForm from './AdressForm';
import PaymentMethodOptions from './PaymentMethodOptions';
import { CompliteOrderFormContainer, FormSectionContainer } from './styles'

const CompliteOrderForm: React.FC = () => {
  const { colors } = useTheme()
 return (
   <CompliteOrderFormContainer>
    <TitleText size='xs' color="subtitle" >
      Complete seu pedido
    </TitleText>

    <FormSectionContainer>
      <SectionTitle
        title='Endereço de Entrega'
        subtitle='Informe o endereço onde deseja receber seu pedido'
        icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
      />

      <AdressForm/>
    </FormSectionContainer>
    <FormSectionContainer>
      <SectionTitle
        title='Pagamento'
        subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
        icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
      />

      <PaymentMethodOptions/>
    </FormSectionContainer>
   </CompliteOrderFormContainer>
 );
}

export default CompliteOrderForm;
