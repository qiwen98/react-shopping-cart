import React from 'react';
import logo from './react.svg';
import './Home.css';
import Button from "@material-ui/core/Button";




class cartitem extends React.Component {

 

  

  constructor(props){
    super(props);
    this.state={quantity:0,price:0};
    this.constant={price:this.props.price,id:this.props.id};
    this.componentDidUpdate=this.componentDidUpdate.bind(this);
   
  }

  handleplus=(e)=>{
    this.setState((prevState,props)=>({quantity:prevState.quantity+1}));
    this.setState((prevState,props)=>({price:((prevState.quantity)*this.constant.price)}));
    
    
     

  }

   handleminus=(e)=>{
    if(this.state.quantity>0)

      {
        this.setState((prevState,props)=>({quantity:prevState.quantity-1}));
        this.setState((prevState,props)=>({price:(prevState.price)-this.constant.price}));

      }


      
    else
      return;
    
  }

  componentDidUpdate(){
      this.update();
  }

  update(){
    //console.log(this.state.price);


    var container={
      price:this.state.price,
      quantity:this.state.quantity,
      id:this.props.id,
    }
    this.props.onUpdate(container);
    
  }

  
  
  

  render() {
         
              const id=this.props.id;
             const Image = require('./' + id + '.jpg');
              const alternate= 'trouses'+id;


    return (
      
      
        <div className="Frame">
          <div className="picturearea" ><img id="img" src={Image} alt={alternate}/></div>
          <div className="infoarea">

              <Button variant="primary" className="plusbutton" onClick={this.handleplus}>+</Button>
              
              <label  ><b>Price in </b>&#165;</label>

              <Button variant="primary" className="minusbutton" onClick={this.handleminus}>-</Button>
                 <p className="price">{this.constant.price}</p>
                 <label><b>Quantity</b></label>
                <p className="quantity">{this.state.quantity}*{this.constant.price}={this.state.price}</p>

                
                
                
              

        
          </div>

        </div>
        
        
      
    );
  }
}



export default cartitem;

