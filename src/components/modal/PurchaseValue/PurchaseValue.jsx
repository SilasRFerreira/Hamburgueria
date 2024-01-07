import StyledPurchaseValue from './StyledPurchaseValue';
import { StyledParagraph } from '../../../styles/Typography';

const PurchaseValue = ({cartList}) => {    
    const values = [];

    cartList.map(card => {
        values.push(card.value);
    })    
    
    const sum = values.reduce((acc, prev) => {
        return acc + prev               
    },0);
    
    return (
        <StyledPurchaseValue>
            <StyledParagraph componentcolor='600'>Total</StyledParagraph>
            <StyledParagraph componentcolor='300'>R$ {sum.toFixed(2)}</StyledParagraph>
        </StyledPurchaseValue>
    );
}

export default PurchaseValue