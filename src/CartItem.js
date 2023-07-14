import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log('this', this.state);
        // setState form 1
        // this.setState({
        //   qty: this.state.qty + 1
        // }, () => {});
    
        // setState form 2 - if prevState required use this
        this.setState((prevState) => {
          return {
            qty: prevState.qty + 1
          }
        });
    }
    
    decreaseQuantity = () => {
        const { qty } = this.state;
    
        if (qty === 0) {
          return;
        }
        // setState form 2 - if prevState required use this
        this.setState((prevState) => {
          return {
            qty: prevState.qty - 1
          }
        });
    }
    render(){
        const { price, title, qty } = this.state;
        return(

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}
                    src=''
                    />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25,fontFamily: "sans-serif" } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price} </div>
                    <div style={ { color: '#777' } }>Qty: {qty} </div>
                    <div className="cart-item-actions">
                         {/* Buttons */}
                        <img
                         alt="increase"
                         className="action-icons"
                         src={require('./photos/add.png')} 
                         onClick={this.increaseQuantity}
                        />
                        <img
                          alt="decrease"
                          className="action-icons"
                          src={require('./photos/sub.png')} 
                          onClick={this.decreaseQuantity}
                        />
                        <img
                         alt="delete"
                         className="action-icons"
                         src={require('./photos/trash.png')} 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image: {
      height: 110,
      width: 100,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;