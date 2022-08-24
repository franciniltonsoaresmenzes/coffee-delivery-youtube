import { RegularText, TitleText } from '../../components/Header/typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedOrderIlustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';

const OrderConfirmed: React.FC = () => {
 const { colors } = useTheme()
 return (
   <OrderConfirmedContainer className='container' >
    <div>
      <TitleText size='l' >
        Uhu! Pedido confirmado.
      </TitleText>

      <RegularText size='l' color='subtitle' >
        Agora só aguardar que logo o café chegará até você
      </RegularText>
    </div>

    <section>
      <OrderDetailsContainer>
        <InfoWithIcon 
          icon={<MapPin weight='fill' />}
          iconBg={colors['brand-purple']}
          text={
            <RegularText>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br/>
              Farrapos - Porto Alegre, RS
            </RegularText>
          }
        />

        <InfoWithIcon
          icon={<Clock weight='fill' />}
          iconBg={colors['brand-yellow']}
          text={
            <RegularText>
              Previsão de entregas
              <br />
              <strong>20 min - 30 min</strong>
            </RegularText>
          }
        />

        <InfoWithIcon
          icon={<CurrencyDollar weight='fill' />}
          iconBg={colors['brand-yellow']}
          text={
            <RegularText>
               Pagamentos na entrega
               <br/>
               <strong>Cartão de Crédito</strong>
            </RegularText>
          }
        />
      </OrderDetailsContainer>

      <img src={confirmedOrderIlustration} />
    </section>
   </OrderConfirmedContainer>
 );
}

export default OrderConfirmed;
