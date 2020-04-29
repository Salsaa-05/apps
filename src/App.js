import React , {Component} from 'react';
import './App.css';
import TodoItems from './Component/Additem/todoitems/Todoitems';
import Additem from './Component/Additem/AddItem'
class App extends Component{
  state = {
items : [
<<<<<<< HEAD
{id:1,name:"Antoni",age:34},
{id:2,name:"Gregorio",age:28},
{id:3,name:"Roberto",age:33}
=======
{id:1,name:"Saad",age:24},
{id:2,name:"Gregorio",age:28},
{id:3,name:"Delpero",age:38}
>>>>>>> ba8a304bd096815bbbb0d2f9d96b9c4af13fc85c
]
  }

deleteItem = (id) => {
  let items = this.state.items.filter(item =>{
    return item.id !== id
  })
 this.setState({items})
}

addItem = (item) => {
  item.id = Math.random();
let items = this.state.items;
items.push(item);
this.setState({items:items})
}

render(){

 return (
    <div className="App containar">
     <h1 className = "text-center">List of Rrsidents</h1> 
      <TodoItems items = {this.state.items} deleteItem = {this.deleteItem} />
      <Additem  addItem={this.addItem}/>
    </div>
  );

}

}

export default App;
<<<<<<< HEAD
//Saad 
=======
>>>>>>> ba8a304bd096815bbbb0d2f9d96b9c4af13fc85c
