import Cart from './Cart/Cart';

import StyledCartList from './StyledCartList';


const CartList = ({cartList, removeCard}) => {   
  
    return (
        <StyledCartList>
            {cartList.map((object) => {                
                return (
                    <Cart 
                        key={object.id} 
                        object={object} 
                        removeCard={removeCard}                   
                    />
                )
            })}
        </StyledCartList>
    );
}

export default CartList