import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Modal from './components/modal/modal';

import api from './services/api';

import GlobalStyles from './styles/GlobalStyles';

import { useEffect, useState } from 'react';

function App() {
  const [burguerList, setBurguerList] = useState([]);
  
  const [isOpen, setIsOpen] = useState(false);

  const [cartList, setCartList] = useState([]);
  
  const [search, setSearch] = useState('');
    
  const burguerFilter = burguerList.filter(
      burguer => burguer.name.toLowerCase().includes(search.toLowerCase())
  );

  const [ids, setID] = useState([]);
  
  const removeCard = (objectID) => {          
    setCartList((cartList) => cartList.filter(object => object.id !== objectID));    
    setID((ids) => ids.map(object => object.id !== objectID));
  }    
  
  useEffect(() => {
    const loadList = async () => {
      const response = await api.get('/products');
      setBurguerList(response.data);
    }    
    loadList()  ;      
    
  },[search, cartList]); 
  
  
  return (
    <>
      <GlobalStyles />
      <Header 
        setIsOpen={setIsOpen} 
        cartList={cartList} 
        setSearch={setSearch}         
      />
      <main>
        <ProductList 
          burguerList={burguerFilter} 
          setCartList={setCartList} cartList={cartList}
          ids={ids}
          setID={setID}
        /> 
        { isOpen 
        ? <Modal 
          removeCard={removeCard} 
          setIsOpen={setIsOpen} 
          cartList={cartList} 
          setCartList={setCartList}
          setID={setID}
        /> 
        : null }        
      </main>
    </>
  )
}

export default App
