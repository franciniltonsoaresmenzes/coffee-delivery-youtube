import { TitleText } from '../../../../components/Header/typography';
import { useCart } from '../../../../hooks/useCarts';
import CoffeeCartCard from '../CoffeeCartCard';
import ConfiermationCoffee from './ConfirmationCoffees';
import { DetailsContainer, SelectedCoffeesContainer } from './styles';

const SelectedCoffees: React.FC = () => {
 const { cartItems } = useCart()
 return (
   <SelectedCoffeesContainer>
    <TitleText size='xs' color='subtitle' >
      Cafés selecionados
    </TitleText>

    <DetailsContainer>
      {cartItems.map((item) => (
        <CoffeeCartCard key={item.id} coffee={item} />
      ))}
      <ConfiermationCoffee/>
    </DetailsContainer>
   </SelectedCoffeesContainer>
 );
}

export default SelectedCoffees;
