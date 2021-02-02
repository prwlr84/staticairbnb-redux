import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () =>{
    this.props.selectFlat(this.props.flat);
  }



  render(){
    let classes = "flat card-trip";
    if(this.props.flat === this.props.selectedFlat){
      classes += " selected"
    }

    return(
      <div className={classes} onClick={this.handleClick}>
      <img src={this.props.flat.imageUrl} />
      <div className="card-trip-infos">
        <div>
          <h2>{this.props.flat.name}</h2>
        </div>
        <h2 className="card-trip-pricing">{this.props.flat.priceCurrency}{this.props.flat.price}</h2>
        <img src="https://kitt.lewagon.com/placeholder/users/prwlr84" className="card-trip-user avatar-bordered" />
      </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { selectFlat: selectFlat },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 selectedFlat: state.selectedFlat
 };
}
export default connect(mapStateToProps, mapDispatchToProps)(Flat);
