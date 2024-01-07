import cart from '../../../assets/cart_ico.svg';
import logo from '../../../assets/logo.svg';

import StyledHeaderSection from './StyledHeaderSection';

const HeaderSection = ({setIsOpen, cartList}) => {       
    return (
        <StyledHeaderSection>
            <img src={logo} alt='Burguer Kenzie' />
            <div>
                <img onClick={() => setIsOpen(true)} src={cart} alt='imagem de umn carrinho de compras' />
                <p>{cartList.length}</p>
            </div>
        </StyledHeaderSection>
    );
}

export default HeaderSection