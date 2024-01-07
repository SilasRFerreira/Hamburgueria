import styled from "styled-components";

const StyledProducts = styled.li`
    min-width: 250px;
    max-width: 300px;
    max-height: 350px;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    border: 2px solid #E0E0E0;
    border-radius: 5px;    

    &:hover{
        border: 2px solid var(--color-primary)
    }

    img{
        height: 150px;
        width: 100%;

        object-fit: contain;

        background-color: var(--color-gray-0);
    }

    div {
        height: 200px;

        padding: 2rem 1.3rem;

        display: flex;
        flex-direction: column;

        align-items: flex-start;
        justify-content: space-between;

        position: relative;
    
        button {
            height: 40px;

            padding: 0 1.25rem;

            border: 2px solid #BDBDBD;
            border-radius: 0.5rem;

            background-color: #BDBDBD;

            color: #FFFFFF;
        }

        button:hover {
            border: 2px solid var(--color-primary);
            

            background-color: var(--color-primary);            
        }
        .toast {
            color: red;

            position: absolute;

            bottom: 0.5rem  ;
        }
    }   
    
`

export default StyledProducts