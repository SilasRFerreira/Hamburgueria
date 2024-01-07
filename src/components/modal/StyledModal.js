import styled from 'styled-components'

const StyledModal = styled.div`
height: 100vh;
width: 100%;

margin: 0 auto;   

background-color: rgba(0,0,0,0.5);

position: fixed;

top: 0;
left: 0;

z-index: 10;

display: flex;

align-items: center;
justify-content: center;

.modal__container {
        width: clamp(250px, 100%, 500px);    
        height: 410px;

        margin: 0 5%;
        
        display: flex;
        flex-direction: column; 

        background-color: var(--color-gray-0);
        
        border-radius: 0.5rem;
    }

    main {
        padding: 20px 0;

        min-height: 375px;
        width: 90%;

        margin: 0 auto;

        display: flex;
        flex-direction: column;

        justify-content: space-between;

        gap: 1.125rem;
    
        
        .removeAll {
            min-height: 60px;

            border: 2px solid var(--color-gray-100);
            border-radius: 0.5rem;

            color: var(--color-gray-300);

            background-color: var(--color-gray-100);
        }

        .removeAll:hover {
            border: 2px solid var(--color-gray-300);

            color: var(--color-gray-100);

            background-color: var(--color-gray-300);
        }        
    }

`

export default StyledModal