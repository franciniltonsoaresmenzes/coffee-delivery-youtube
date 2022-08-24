import { TitleText } from '../../../../components/Header/typography';
import { coffees } from '../../../../data/coffees';
import CoffeeCard from '../CoffeeCard';
import { CoffeeList, OurCoffeesContainer } from './styles';

const OurCoffees: React.FC = () => {
 return (
   <OurCoffeesContainer className='container' >
    <TitleText size='l' color='subtitle' >
      Nossos cafés
    </TitleText>

   <CoffeeList>
    {coffees.map((coffee) => (
      <CoffeeCard key={coffee.id} coffee={coffee} />
    ))}
   </CoffeeList>
   </OurCoffeesContainer>
 );
}

export default OurCoffees;
