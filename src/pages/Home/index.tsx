import Intro from './components/Intro';
import OurCoffees from './components/OurCoffess';
import { HomeContainer } from './styles';

const HomePage:React.FC = () => {
  return (
    <HomeContainer>
      <Intro/>
      <OurCoffees/>
    </HomeContainer>
  );
}

export default HomePage;
