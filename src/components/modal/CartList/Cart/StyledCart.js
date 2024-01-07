import styled from 'styled-components'

const StyledCart = styled.li`
    height: 80px;
    width: 100%;

    display: flex;

    gap: 1rem;
    
    .item-img{
        height: 80px;
        width: 80px;

        background-color: var(--color-gray-100);

        border-radius: 5px;
    }
    
    div {         
        width: calc(100% - 80px);
        
        display: flex;

        align-items: flex-start;
        justify-content: space-between;  
        
        gap: 0.5rem;
        
        .trash-ico{
            cursor: pointer;
        }
    }

`

export default StyledCart