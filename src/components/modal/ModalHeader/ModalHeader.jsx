import { StyledH3 } from '../../../styles/Typography';
import StyledModalHeader from './StyledModalHeader';

const ModalHeader = ({setIsOpen}) => {    
    
    return (
        <StyledModalHeader>
            <StyledH3>Carrinho de compras</StyledH3>
            <button onClick={() => setIsOpen(false)}>X</button>
        </StyledModalHeader>
    );
}

export default ModalHeader