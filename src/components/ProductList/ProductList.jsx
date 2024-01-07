import Product from './Products/Products';
import StyledProductList from './StyledProductList';


const ProductList = ({burguerList, setCartList, cartList, setID, ids}) => {  
        
    return (
        <StyledProductList>
            <ul>
                {burguerList.map((burguer) => {
                    return (
                        <Product 
                            key={burguer.id} 
                            burguer={burguer} 
                            setCartList={setCartList} 
                            cartList={cartList}
                            setID={setID}
                            ids={ids}
                        />
                    )
                })}
            </ul>
        </StyledProductList>
    );
}

export default ProductList