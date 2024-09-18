import React, { useState, useEffect, useRef } from "react";
import { useOneProductQuery } from "../hook/Product";
import { useShopCart } from "../context/ShopCartContext";

type Props = {
    id: string;
    quantity: number;
};

const CartItemOrder = ({ id, quantity }: Props) => {
    const { increaseItemQuantity, decreaseItemQuantity, SetcartPrice } = useShopCart();
    const { isError, isLoading, data } = useOneProductQuery(id);
    const [price, setPrice] = useState(0);
    const prevQuantityRef = useRef(quantity);

    useEffect(() => {
        if (data) {
            const newPrice = data.price * quantity;
            setPrice(newPrice);
        }
    }, [data, quantity]);

    if (data === undefined) {
        return null;
    }

    return (
        <div>
            <div className="grid text-center grid-cols-3 bg-white rounded-lg my-[30px] items-center w-full h-[150px]">
                <div>
                    <img
                        src={data?.img}
                        className="w-[270px] h-[120px] object-cover"
                    />
                    <h2 className="text-[18px]  font-normal text-[#2b2b2b] text-left leading-tight">
                        {data?.name}
                    </h2>
                </div>
                <div className="">
                    <p className="mx-3">{quantity}</p>
                </div>
                <div className=" ">
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItemOrder;
