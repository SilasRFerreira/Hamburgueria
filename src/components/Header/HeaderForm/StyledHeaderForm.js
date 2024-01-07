import styled from 'styled-components'

const StyledHeaderForm = styled.form`
    position: relative;

    width: clamp(250px, 100%, 382px);
    
    input {
        height: 60px;
        width: 100%;

        padding: 0 5rem 0 0.625rem;

        border: 2px solid var(--color-gray-100);
        border-radius: 0.5rem;

        background-color: #FFFFFF;
    }

    button {
        height: 40px;
        
        background-color: var(--color-primary);

        border: 2px solid var(--color-primary);
        border-radius: 0.5rem;

        padding: 0 1.25rem;

        position: absolute;

        right: 0.625rem;
        top: 0.625rem;
    }
`

export default StyledHeaderForm