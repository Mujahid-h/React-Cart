import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {

    const obj1 = {
        id: "mb1",
        name: "Mac Book",
        price: 1200,
        img: img1

    };
    const obj2 = {
        id: "bs1",
        name: "Black Shoes",
        price: 500,
        img: img2
    };

    const productList = [obj1, obj2];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch(
            {
                type: 'addToCart',
                payload: options
            }
        )
        dispatch({type:'calculatePrice'})
        toast.success('Added To Cart');
    }
    return (
        <div className='home'>
            {
                productList.map((i) => (
                    <ProductCard
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        price={i.price}
                        imgSrc={i.img}
                        handler={addToCartHandler}
                    />
                ))
            }



        </div>
    )
}

const ProductCard = ({ id, name, price, imgSrc, handler }) => {
    return <div className="ProductCard">
        <img src={imgSrc} alt="" />
        <p>{name}</p>
        <h4>${price}</h4>
        <button
            onClick={() => handler({ id, name, price, quantity: 1, imgSrc })}
        >
            Add To Cart
        </button>
    </div>
}

export default Home