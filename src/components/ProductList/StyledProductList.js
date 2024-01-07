import styled from 'styled-components';

const StyledProductList = styled.section`
    margin:  0 auto;
    
    width: 100%;

    ul {
        width: 95%;
        margin: 0 auto;

        display: flex;

        overflow-x: auto;

        gap: 1rem;

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
        }

    @media (min-width: 1024px) {
        ul{
            flex-wrap: wrap;          

            
        }
    }
`

export default StyledProductList