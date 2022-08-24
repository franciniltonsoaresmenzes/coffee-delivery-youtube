import CompliteOrderForm from "./components/CompliteOrderForm";
import SelectedCoffees from "./components/SelectedCoffees";
import { CompliteOrderContainer } from "./styles";

const CompliteOrder: React.FC = () => {
  return (
   <CompliteOrderContainer className="container">
    <CompliteOrderForm/>
    <SelectedCoffees/>
  </CompliteOrderContainer>
  );
}

export default CompliteOrder;
