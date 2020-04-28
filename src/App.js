import React , {Component} from 'react';
import './App.css';
import TodoItems from './Component/Additem/todoitems/Todoitems';
import Additem from './Component/Additem/AddItem'
class App extends Component{
  state = {
items : [
{id:1,name:"Saad",age:22},
{id:2,name:"ali",age:28},
{id:3,name:"momo",age:30}
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
    <div className="App">
      TodoList
      <TodoItems items = {this.state.items} deleteItem = {this.deleteItem} />
      <Additem  addItem={this.addItem}/>
    </div>
  );

}

}

export default App;
