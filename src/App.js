
import './App.css';
import Navi from './Navi';
import Section from './Section';
import { useState } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Product.json';
import { Container } from 'reactstrap';

const itemArray=new Array(8).fill(0);

function App() {
 
const [cart, setCart]=useState(0);
  
const handlerAdd=(index)=>{

  setCart(cart+1);
  itemArray[index]=1;
  console.log(`added index ${itemArray}`)
  console.log(cart);
  

}

const handlerRemove=(index)=>{
  setCart(cart-1);
  itemArray[index]=itemArray[index]-1;
  console.log("Removed index");
  console.log(itemArray);
console.log(cart);

}
  return (
   <Container>
      <Navi cart={cart}/>
      <Header />
      <Section cart={cart} handlerAdd={handlerAdd} handlerRemove={handlerRemove}  itemArray={itemArray}/>
      </Container>
  );
}

export default App;
