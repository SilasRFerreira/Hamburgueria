import { useEffect, useRef } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import CartList from './CartList/CartList';
import PurchaseValue from './PurchaseValue/PurchaseValue';

import StyledModal from './StyledModal';


const Modal = ({setIsOpen, cartList, setCartList, removeCard, setID}) => {    
    const modalref = useRef(null)  ;  
    
    const removeAllCards = () => {
      setCartList([]);
      setID([]);
    };

    useEffect(() => {
      const handleOutCLick = (e) => { 
        if(!modalref.current.contains(e.target)) {
          setIsOpen(false);
        }  
      };

      window.addEventListener('mousedown', handleOutCLick);

      return () => {
        window.removeEventListener('mousedown', handleOutCLick);
      }

    }, []);    

    useEffect(() => {
      const handleKeyDown = (e) => {
        e.key === 'Escape' ? setIsOpen(false): null
      };

      window.addEventListener('keydown', handleKeyDown);      
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      }
    }, []);

    return (
        <StyledModal role='dialog'>
            <div ref={modalref} className='modal__container'>
              <ModalHeader setIsOpen={setIsOpen} />
              <main>
                <CartList 
                  cartList={cartList} 
                  setCartList={setCartList} 
                  removeCard={removeCard}
                />
                <PurchaseValue cartList={cartList}/>
                <button className='removeAll' onClick={() => {removeAllCards()}}>Remover todos</button>
              </main>
            </div>
          </StyledModal>
    );
}

export default Modal