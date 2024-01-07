import { useState } from 'react';
import { StyledH3, StyledSmall, StyledParagraph } from '../../../styles/Typography';
import StyledProducts from './StyledProducts';


const Product = ({burguer, setCartList, cartList, ids, setID}) => {                       
   
    const [toast, setToast] = useState('');
    
    const addToCart = () => {
        
        if (ids.includes(burguer.id)) {            
            setToast('Produto já adicionado')
            setTimeout(() => {
                setToast('')
            }, 3000);   
            
        } else {
            setID([...ids, burguer.id])
            
            setCartList([...cartList, {                    
              id: burguer.id,
              img: burguer.img,
              name: burguer.name,
              value: burguer.price,
          }])};
    };   
    
    return (
        <StyledProducts>
            <img src={burguer.img} />
            <div>
                <StyledH3>{burguer.name}</StyledH3>
                <StyledSmall>{burguer.category}</StyledSmall>
                <StyledParagraph>R$: {burguer.price.toFixed(2)}</StyledParagraph>                                
                <button onClick={() => addToCart()}>Acessar</button>
                <StyledParagraph className='toast'>{toast}</StyledParagraph>
            </div>
        </StyledProducts>
    );
}

export default Product