
import './App.css';
import Navi from './Navi';
import Section from './Section';
import { useState } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './Product.json';
import { Container } from 'reactstrap';

function App() {
  // const[list,setlist] =
  const [cart, setCart]=useState(0);
const handlerAdd=(index)=>{

  setCart(cart+1);
  data[index].productCount=data[index].productCount+1
  console.log(cart);
}

const handlerRemove=()=>{
  setCart(cart-1);
  console.log(cart);
}
  return (
   <Container>
      <Navi cart={cart}/>
      <Header />
      <Section cart={cart} handlerAdd={handlerAdd} handlerRemove={handlerRemove}/>
      </Container>
  );
}

export default App;
