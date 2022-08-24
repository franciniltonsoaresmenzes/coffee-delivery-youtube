import Button from '../../../../components/Button';
import { RegularText } from '../../../../components/Header/typography';
import { useCart } from '../../../../hooks/useCarts';
import { formatMoney } from '../../../../utils/formatMoney';
import { ConfiermationCoffeeContainer } from './styles';

const DELIVERY_PRICE = 3.5

const ConfiermationCoffee: React.FC = () => {
 const { cartItemTotal, cartQuantity } = useCart()
 const cartTotal = cartItemTotal + DELIVERY_PRICE


 const formattedItemsTotal = formatMoney(cartItemTotal)
 const formattedCartTotal = formatMoney(cartTotal)
 const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
 return (
   <ConfiermationCoffeeContainer>
    <div>
      <RegularText size='s' >Total de items</RegularText>
      <RegularText>R$ {formattedItemsTotal}</RegularText>
    </div>
    <div>
      <RegularText size='s' >Entrega</RegularText>
      <RegularText>R$ {formattedDeliveryPrice}</RegularText>
    </div>

    <div>
      <RegularText weight="700" color="subtitle" size="l" >Total</RegularText>
      <RegularText weight="700" color="subtitle" size="l" >R$ {formattedCartTotal}</RegularText>
    </div>

    <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
   </ConfiermationCoffeeContainer>
 );
}

export default ConfiermationCoffee;
