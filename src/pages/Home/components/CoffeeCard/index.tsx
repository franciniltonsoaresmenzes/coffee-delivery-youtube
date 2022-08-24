import { AddCardWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from './styles';
import { RegularText, TitleText } from '../../../../components/Header/typography';
import QuantityInput from '../../../../components/QuantityInput';
import { ShoppingCart } from 'phosphor-react';
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCarts';
import { useState } from 'react';

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee;
}

const CoffeeCard: React.FC<CoffeeProps> = ({ coffee }) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1) 
  }

  function handleDecrease() {
    setQuantity((state) => state - 1) 
  }
  const { addCoffeeCart } = useCart()
  const formattedPrice = formatMoney(coffee.price)

  function handleAddToCart() {
    const coffeeAdd = {
      ...coffee,
      quantity
    }

    addCoffeeCart(coffeeAdd)
  }
  return (
   <CoffeeCardContainer>
    <img src={`coffees/${coffee.photo}`}/>

    <Tags>
      {coffee.tags.map((tag) => (
        <span key={`${coffee.id}${tag}`} >{tag}</span>
      ))}
    </Tags>

    <Name>{coffee.name}</Name>
    <Description>{coffee.description}</Description>

    <CardFooter>
      <div>
        <RegularText size='s' >R$</RegularText>
        <TitleText size="m" color='text' as="strong" >
          {formattedPrice}
        </TitleText>
      </div>


      <AddCardWrapper>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <button onClick={handleAddToCart} >
          <ShoppingCart size={22} weight="fill" />
        </button>
      </AddCardWrapper>
    </CardFooter>
   </CoffeeCardContainer>
 );
}

export default CoffeeCard;
