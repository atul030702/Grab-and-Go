import { useContext } from "react";
import { CartContext } from "../utils/cartContext.js";

const Cart = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const calculateItemTotal = (item) => {
        const unitPrice = (item?.price / 100 || item?.defaultPrice / 100);
        return unitPrice * item?.quantity;
    };

    const calculateCartTotal = () => {
        return cartItems.reduce((acc, item) => {
            const unitPrice = (item?.price / 100 || item?.defaultPrice / 100);
            return acc + unitPrice * item?.quantity;
        }, 0);
    };

    return cartItems.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center m-2.5 p-2">
            <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
            <p className="text-xl">Please add to continue...</p>
        </div>
    ) : (
        <div className="cart-container flex flex-col justify-center items-center my-2.5 mx-auto w-1/2 h-max">
            <h2 className="text-2xl font-semibold">Cart Items 🛒</h2>

            <ul className="flex flex-col mx-auto my-5 w-full gap-2.5 p-2">
                {cartItems.map((item,index) => (
                    <li key={index}
                        className="menu-price-detail flex flex-col items-start justify-center border-b-3 border-b-[#aaa] border-solid"
                    >
                        <div className="w-full flex justify-between items-center">
                            <h3 className="text-xl font-semibold">
                                {item?.name}
                            </h3>
                            <button onClick={() => removeFromCart(item?.id)} title="Remove Item"
                                className="removeFromCart m-0.5 py-1 px-3 bg-[#c26100] rounded-xl cursor-pointer font-semibold text-white hover:bg-[#e73336]"
                            >
                                ×
                            </button>
                        </div>
                        <div className="w-full flex justify-start items-center">
                            <button onClick={() => decreaseQuantity(item?.id)} title="Decrease Quantity"
                                className="my-0.5 mx-2 py-0.5 px-3 text-[18px] bg-[#c26100] rounded-xl cursor-pointer font-semibold text-white hover:bg-[#e73336]"
                            >
                                -
                            </button>
                            <span className="text-[20px]">
                                {item?.quantity}
                            </span>
                            <button onClick={() => increaseQuantity(item?.id)} title="Increase Quantity"
                                className="my-0.5 mx-2 py-0.5 px-3 text-[18px] bg-[#c26100] rounded-xl cursor-pointer font-semibold text-white hover:bg-[#e73336]"
                            >
                                +
                            </button>
                        </div>
                        <span className="text-[18px]">
                            ₹{item?.price / 100 || item?.defaultPrice / 100} × {item?.quantity} =  ₹{calculateItemTotal(item).toFixed(2)}
                        </span>
                    </li>
                ))}  
            </ul>
            <div className="w-full flex flex-col items-end justify-center mr-5">
                <p className="total-price text-xl mr-3">
                    Total: ₹{calculateCartTotal().toFixed(2)}
                </p>
                <button className="payment-btn m-2 px-4 py-2 bg-[#c26100] rounded-xl cursor-pointer font-semibold text-white hover:bg-[#e73336]">
                    Proceed To Pay
                </button>
            </div>
        </div>
    )
};

export default Cart;