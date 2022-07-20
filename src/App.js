
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
  const [isAdd, setIsAdd]=useState([]);
const [itemArray ,setItemArray]= useState([]);


  // const itemArray=new Array(8).fill(0);
  // let setItemArray =(index)=>{
  //   itemArray[index]=1;
  //   console.log(itemArray);
  // }
  

const handlerAdd=(index)=>{

  setCart(cart+1);
  setIsAdd([...isAdd,index]);
  // data[index].productCount=data[index].productCount+1
  console.log(cart);
  console.log(isAdd);
  setItemArray(itemArray[index]=1);
  console.log(itemArray);
  localStorage.setItem("isAdd",JSON.stringify([...isAdd,index]))
}

const handlerRemove=(index)=>{
  setCart(cart-1);
  let temp=isAdd;
  temp.slice(index,1);
  setIsAdd([...isAdd])
  localStorage.setItem(isAdd,JSON.stringify([[...isAdd]]))
console.log(cart);
console.log(isAdd)
}
  return (
   <Container>
      <Navi cart={cart}/>
      <Header />
      <Section cart={cart} handlerAdd={handlerAdd} handlerRemove={handlerRemove} setItemArray={setItemArray}/>
      </Container>
  );
}

export default App;
