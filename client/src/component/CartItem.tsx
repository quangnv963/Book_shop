import React, { useState, useEffect, useRef } from "react";
import { useOneProductQuery } from "../hook/Product";
import { useShopCart } from "../context/ShopCartContext";

type Props = {
    id: string;
    quantity: number;
};

const CartItem = ({ id, quantity }: Props) => {
    const { increaseItemQuantity, decreaseItemQuantity, SetcartPrice } = useShopCart();
    const { isError, isLoading, data } = useOneProductQuery(id);
    const [price, setPrice] = useState(0);
    const prevQuantityRef = useRef(quantity);

    useEffect(() => {
        if (data) {
            const newPrice = data.price * quantity;
            setPrice(newPrice);

            // Detect change in quantity and adjust the price accordingly
        

            // Update the previous quantity for the next render
        }
    }, [data, quantity]);

    const handleIncreaseQuantity = () => {
        increaseItemQuantity(id);
        if (data) {
            SetcartPrice((prevPrice: number) => prevPrice + data.price);
        }
    };

    const handleDecreaseQuantity = () => {
        decreaseItemQuantity(id);
        if (data && quantity >= 1) {
            SetcartPrice((prevPrice: number) => prevPrice - data.price);
        }
    };

    if (data === undefined) {
        return null;
    }

    return (
        <div>
            <div className="grid grid-cols-3 bg-white rounded-lg p-3 items-center w-full h-[210px] m-3">
                <div>
                    <img
                        src={data?.img}
                        className="w-[60%] h-[150px] object-cover"
                    />
                    <h2 className="text-[18px] font-normal text-[#2b2b2b] text-left leading-tight">
                        {data?.name}
                    </h2>
                </div>
                <div className="flex text-center">
                    <button onClick={handleIncreaseQuantity}>+</button>
                    <p className="mx-3">{quantity}</p>
                    <button onClick={handleDecreaseQuantity}>-</button>
                </div>
                <div className="flex">
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
