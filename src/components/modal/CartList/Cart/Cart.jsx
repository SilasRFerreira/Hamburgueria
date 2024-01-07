import trash from '../../../../assets/trash_ico.svg'
import { StyledH3 } from '../../../../styles/Typography'

import StyledCart from './StyledCart'

const Cart = ({object, removeCard}) => {     
    
    return (
        <StyledCart>
            <img className='item-img' src={object.img} />
            <div>
                <StyledH3>{object.name}</StyledH3>                
                <img className='trash-ico' src={trash} alt='Imagem de uma lata de lixo' onClick={() => removeCard(object.id)}/>                
            </div>
        </StyledCart>
    )
}

export default Cart