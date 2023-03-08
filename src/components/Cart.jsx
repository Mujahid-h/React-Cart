import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {

    const { cartItems, subtotal, tax, shipping, total } = useSelector((state) => state.cart)

    const dispatch = useDispatch();

    const increment = (id) => {
        dispatch({
            type: 'addToCart',
            payload: { id }
        })
        dispatch({type:'calculatePrice'})
    };

    const decrement = (id) => {
        dispatch({
            type: 'decrement',
            payload: id 
        })
        dispatch({type:'calculatePrice'})
    };

    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteFromCart',
            payload: id 
        })
        dispatch({type:'calculatePrice'})
    };

    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItem
                                key={i.id}
                                id={i.id}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                imgSrc={i.imgSrc}
                                increment={increment}
                                decrement={decrement}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    ) : (
                        <h1>No Items yet</h1>
                    )
                }
            </main>
            <aside>
                <h2>SubTotal: ${subtotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ id, name, price, qty, imgSrc, increment, decrement, deleteHandler }) => (
    <div className="CartItem">
        <img src={imgSrc} alt="img" />

        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHandler(id)} />

    </div>

)

export default Cart