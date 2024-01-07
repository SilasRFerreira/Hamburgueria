import HeaderForm from './HeaderForm/HeaderForm';
import HeaderSection from './HeaderSection/HeaderSection';

import StyledHeader from './StyledHeadar';

const Header = ({setIsOpen, cartList, setSearch}) => {       
    
    return (
     <StyledHeader>
        <div className='header__container'>
            <HeaderSection setIsOpen={setIsOpen} cartList={cartList}/>
            <HeaderForm setSearch={setSearch} />
        </div>
     </StyledHeader>   
    );
}

export default Header