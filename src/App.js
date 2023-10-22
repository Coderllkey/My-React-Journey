import React from "react";
import './style.css';
import logo from './logo.svg';




class Header extends React.Component{
  render(){
    return(
      <h1 className="title">A Very Basic React App</h1>
    )
  }
}
class Body extends React.Component{
  render(){
    return(
      <tr className="row">
         
         <td className="item">
              {this.props.name}
            </td>
            <td className="item">
              {this.props.qty}
            </td>
      </tr>
    )
  }
}


class App extends React.Component {
  state = {
    items : [
      {id:1, name:'table', qty:5},
      {id:2, name:'spoon', qty:3},
   

    ]
  }
 nameref = React.createRef();
 qtyref = React.createRef();


add=()=>{
  let id = this.state.items.length+1;
  let name = this.nameref.current.value;
  let qty = this.qtyref.current.value;

  console.log(id);
  this.setState({
    items : [
      ...this.state.items,{id,name,qty}
    ]
  })

}


  render(){
    return(
      <div className="container">
      <img src={logo} className="App-logo" alt="logo" />

      <Header/>
      <div>
        <input className="in" type="text" ref={this.nameref}/><br/>
        <input className="in" type="number" ref={this.qtyref}/><br/>

      </div><br/>
      <button className="btn" onClick={this.add}>Add new Item</button>
      <table className="table">
        <th>
          <td>Item Lists</td>
          
        </th>
        
          {this.state.items.map(i=>{
        return (
          <Body key={i.id} name={i.name} qty={i.qty}/>

        )
          })}

        
      </table>

      </div>
    )
  }
}

export default App;