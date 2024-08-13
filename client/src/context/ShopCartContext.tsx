import { ReactNode, createContext, useContext, useState } from "react";
import React from "react";
import Cart from "../component/Cart";



type ShopCartContext = {
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartPrice:number
    cartItem: CartItem[]
    getItemQuantity: (id:string) => number
    increaseItemQuantity: (id:string) => void
    decreaseItemQuantity: (id:string) => void
    removeFromCart: (id:string) => void,
    SetcartPrice: (priceUpdater: (prevPrice: number) => number) => void
}
type CartItem = {
    id:string
    quantity:number
}
const ShopCartContext = createContext({} as ShopCartContext)
export function useShopCart() {
    return useContext(ShopCartContext);
  }


 type ShopCartProviderProps = {
    children: ReactNode
 }
export function ShopCartProvider({children}:ShopCartProviderProps){
    const [isOpen, SetIsOpen] = useState(false)
    const [cartItem, SetCartItems] = useState<CartItem[]>([])
    const [cartPrice, SetcartPrice] = useState(0)


    const cartQuantity = cartItem.reduce((quantity, items) => items.quantity + quantity, 0)
    const openCart = () => SetIsOpen(true)
    const closeCart = () => SetIsOpen(false)
    function getItemQuantity(id:string) {
        return cartItem.find(item => item.id === id)?.quantity || 0
    }

    function increaseItemQuantity(id:string){
        SetCartItems(curItems => {
            if(curItems.find(item => item.id === id) == null){
                return [...curItems, {id, quantity:1}]
            }else {
                return curItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity:item.quantity + 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseItemQuantity(id:string){
        SetCartItems(curItems => {
            if(curItems.find(item => item.id === id)?.quantity === 1){
                return curItems.filter(item => item.id !== id)
            }else {
                return curItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity:item.quantity - 1}
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id:string) {
        SetCartItems(currItems => {
            return currItems.filter(item => item.id === id)
        })
    }
    return (
        <ShopCartContext.Provider 
        value={{
        getItemQuantity, 
        increaseItemQuantity, 
        decreaseItemQuantity, 
        removeFromCart,
        openCart,
        closeCart,
        cartItem,
        cartPrice,
        cartQuantity,
        SetcartPrice
        }}>
            {children}
            {isOpen && <Cart />}
        </ShopCartContext.Provider>
    )
}