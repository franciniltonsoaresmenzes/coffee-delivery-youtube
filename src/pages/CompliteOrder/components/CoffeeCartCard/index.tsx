import { ActionsContainer, RemoveButton, SelectedCoffeesContainer } from "./styles";
import { RegularText } from "../../../../components/Header/typography";
import QuantityInput from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import { CartItems } from "../../../../contexts/CartContext";
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCarts";

interface CoffeeCartCardProps {
  coffee: CartItems
}

const CoffeeCartCard: React.FC<CoffeeCartCardProps> = ({ coffee }) => {
 const coffeeTotal = coffee.price * coffee.quantity

 const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

 const formattedPrice = formatMoney(coffeeTotal)
 return (
   <SelectedCoffeesContainer >
    <div>
      <img src={`/coffees/${coffee.photo}`} />
      <div>
        <RegularText color="subtitle" >{coffee.name}</RegularText>
        <ActionsContainer>
          <QuantityInput 
            size="small" 
            quantity={coffee.quantity} 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <RemoveButton onClick={handleRemove} >
            <Trash size={16} />
            REMOVER
          </RemoveButton>
        </ActionsContainer>
      </div>
    </div>

    <p>R$ {formattedPrice}</p>
   </SelectedCoffeesContainer>
 );
}

export default CoffeeCartCard;
