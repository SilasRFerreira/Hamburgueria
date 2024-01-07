import styled from 'styled-components'

const StyledCartList = styled.ul`
    min-height: 210px;
    width: 100%;
    
    margin: 0 auto;

    padding: 2rem 0;

    display: flex;
    flex-direction: column;

    gap: 1rem;    

    border-bottom: 2px solid var(--color-gray-100);

    overflow-y: scroll;

    scrollbar-width: none; 

    -ms-overflow-style: none; 
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: none !important;
        background-color: transparent;
    }
    &::-webkit-scrollbar {
        width: 3px !important;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: transparent;
    }    
`

export default StyledCartList