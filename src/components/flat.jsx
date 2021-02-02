import React, { Component } from 'react';

class Flat extends Component {
  render(){
    return(
      <div className="card-trip">
      <img src={this.props.flat.imageUrl} />
      <div className="card-trip-infos">
        <div>
          <h2>{this.props.flat.name}</h2>
        </div>
        <h2 className="card-trip-pricing">{this.props.flat.priceCurrency}{this.props.flat.price}</h2>
        <img src="https://kitt.lewagon.com/placeholder/users/prwlr84" class="card-trip-user avatar-bordered" />
      </div>
    </div>
    )
  }
}

export default Flat;
