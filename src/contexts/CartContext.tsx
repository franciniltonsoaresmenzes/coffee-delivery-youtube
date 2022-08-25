import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer'; 

export interface CartItems extends Coffee {
  quantity: number
}
 
interface CartContextType {
  cartItems: CartItems[]
  cartQuantity: number
  addCoffeeCart: (coffee: CartItems) => void
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItem: (cartItemId: number) => void
  cartItemTotal: number
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContext = createContext({} as CartContextType )

export function CartContextProvide({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)    

    if (storedCartItems) {
      return JSON.parse(storedCartItems)    
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeCart(coffee: CartItems) {
    const coffeeAlreadyExstInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {

      if (coffeeAlreadyExstInCart < 0) {
        draft.push(coffee)
      }else {
        draft[coffeeAlreadyExstInCart].quantity += coffee.quantity;
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistinCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId )

      if (coffeeExistinCart >= 0 ) {
        const item = draft[coffeeExistinCart]
        draft[coffeeExistinCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistinCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId )

      if (coffeeExistinCart >= 0) {
        draft.splice(coffeeExistinCart, 1)
      }
    }) 

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return(
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeCart, changeCartItemQuantity, removeCartItem, cartItemTotal, cleanCart}}>
      {children}
    </CartContext.Provider>
  )
}
