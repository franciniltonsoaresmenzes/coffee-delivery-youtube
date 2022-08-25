import { RegularText, TitleText } from '../../components/Header/typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedOrderIlustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../CompliteOrder';
import { paymentMethods } from '../CompliteOrder/components/CompliteOrderForm/PaymentMethodOptions';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData
}

const OrderConfirmed: React.FC = () => {
 const { colors } = useTheme()
  
  const { state } = useLocation() as unknown as LocationType
  
  const navigate = useNavigate()

  useEffect(() => {
    if(!state) {
      navigate("/")
    }
  }, [])

  if(!state) return <></>

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
              Entrega em <strong>{state.street}, {state.number}</strong>
              <br/>
              {state.district} - {state.city}, {state.uf}
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
               <strong>{paymentMethods[state.paymentMethod].label}</strong>
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
