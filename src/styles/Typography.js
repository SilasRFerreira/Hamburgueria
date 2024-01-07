import styled, { css } from 'styled-components';

export const HeadingOne = css`
    font-size: 1.625rem;
    font-weight: bold;
`
export const HeadingTwo = css`
    font-size: 1.375rem;
    font-weight: bold;
`
export const HeadingThree = css`
    font-size: 1.125rem;
    font-weight: bold;
`
export const Headline = css`
    font-size: 1rem;
    font-weight: normal;
`
export const body = css`
    font-size: 0.875rem;
    font-weight: normal;
`
export const body600 = css`
    font-size: 0.875rem;
    font-weight: bolder;
`
export const caption = css`
    font-size: 0.75rem;
    font-weight: normal;
`

export const StyledH3 = styled.h3`
    color: var(--color-gray-600);
    ${HeadingThree};
`

export const StyledSmall = styled.small`
    color: var(--color-gray-300);
    ${caption}
`
export const StyledParagraph = styled.p`
    ${body600}       

    
    ${({componentcolor}) => {
        if(componentcolor === '300') {
            return css`
                color: var(--color-gray-300);                
            `
        } else if (componentcolor === '600') {
            return css`
                color: var(--color-gray-600);                
            `
        } else {
            return css`
                color: var(--color-primary);
            `
        }
    }  
    }
`