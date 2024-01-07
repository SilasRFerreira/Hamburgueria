import styled from 'styled-components'

const StyledHeaderSection = styled.section`
    display: flex;      

    width: calc(100% - 400px);
    min-width: 250px;
    
    align-items: center;
    justify-content: space-between;

    
    h1 {
        
    }
    
    
    div {
        justify-self: flex-end;

        width: 2.375rem;
        height: 2.375rem;

        position: relative;
        
        img {
            position: absolute;

            bottom: 0;            
        }
        
        p {
            background-color: var(--color-primary);
            
            width: 20px;
            height: 24px;

            color: #ffffff;

            display: flex;

            border: 1px solid var(--color-primary);
            border-radius: 7px;

            justify-content: center;
            align-items: center;

            position: absolute;

            top: 0;
            right: 0;
        }
    }

    
`

export default StyledHeaderSection