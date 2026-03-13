import {createContext, useContext, useState, useEffect} from "react";

const CartContext = createContext();
export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(() => {
        try {
            const saved = localStorage.getItem("cartData");
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error("LocalStorage Error:", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, size) => {
        setCartItems(prev => {
            const exist = prev.find(
                item => item._id === product._id && item.size === size
            );

            if (exist) {
                return prev.map(item =>
                    item._id === product._id && item.size === size
                        ? {...item, qty: item.qty + 1} : item
                );
            }

            return [...prev, {...product, size, qty: 1}];
        });
    };

    const updateQty = (id, size, type) => {
        setCartItems(prev =>
            prev.map(item =>
                item._id === id && item.size === size
                    ? {
                        ...item,
                        qty:
                            type === "inc"
                                ? item.qty + 1
                                : Math.max(1, item.qty - 1),
                    } : item
            )
        );
    };

    const removeFromCart = (id, size) => {
        setCartItems(prev =>
            prev.filter(item => !(item._id === id && item.size === size))
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartData");
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart, updateQty, removeFromCart, clearCart,}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);