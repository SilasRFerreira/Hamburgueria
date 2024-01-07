import magnifyingGlass from '../../../assets/magnifying_glass_ico.svg';

import StyledHeaderForm from './StyledHeaderForm';

const HeaderForm = ({setSearch}) => {         
    
    return (
        <StyledHeaderForm>
            <input 
                onChange={(e) => {setSearch(e.target.value)}}
                type='text' 
                placeholder='Digitar pesquisa'/>
            <button>
                <img src={magnifyingGlass} alt='Imagem de uma lupa' />
            </button>
        </StyledHeaderForm>
    );
}

export default HeaderForm