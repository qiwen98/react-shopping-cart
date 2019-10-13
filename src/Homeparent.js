

import React from 'react';
import logo from './react.svg';
import Home from './Home';
import './Home.css';




 class shoppingcart extends React.Component{

  constructor(props){
    super(props);
    this.state={
     totalprice:0,totalquantity:0,priceArray:Array(9).fill(0),quantityArray:Array(9).fill(0)
    };

  }

  childhander=(e)=>{
         
        var totalprice=0;
        var totalquantity=0;
        
        this.state.priceArray[e.id]=e.price;
         this.state.quantityArray[e.id]=e.quantity;
        
        
      
        for(var i=0;i<this.state.priceArray.length;i++)
        {
          totalprice=totalprice+this.state.priceArray[i];
          totalquantity=totalquantity+this.state.quantityArray[i];

        }
          console.log(totalprice);
          console.log(this.state.priceArray[e.id]);
          console.log(totalquantity);


          if (this.state.totalprice !== totalprice &&this.state.totalquantity!== totalquantity) {
               this.setState({ totalprice:totalprice,totalquantity:totalquantity });
               return;
           }
      
  }

    

render(){


  return (

    <div className="wrapper">

      <h1>PLEATS PLEASE</h1><p>By</p>

      <h4>Issey Miyake</h4>
      <div className="item-list">
      <Home price={150.99} id={0} onUpdate={this.childhander}  />
       <Home price={170.99} id={1} onUpdate={this.childhander} />
      <Home price={280.99} id={2} onUpdate={this.childhander}  />
       <Home price={160.99} id={3} onUpdate={this.childhander}/>
  

       
       </div>
        
        <div className="shoppingcart">
            <div className="totalquantity"><b>You have selected {this.state.totalquantity} items</b></div>

             <div className="totalprice"><b>Total amount of price is {this.state.totalprice}</b></div>
        </div>
    </div>
  );

}
}

export default shoppingcart;