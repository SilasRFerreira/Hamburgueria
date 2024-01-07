import styled from 'styled-components'

const StyledModalHeader = styled.header`
    padding: 13px 20px;
    
    background-color: var(--color-primary);    

    display: flex;

    align-items: center;
    justify-content: space-between  ;

    border-radius: 0.5rem 0.5rem 0 0 ;

    h3 {
        color: #ffffff
    }

    button{
        color: rgba(255,255,255,0.5);
    }
`

export default StyledModalHeader