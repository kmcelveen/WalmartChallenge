import React from 'react';
import {getLocaleData, getPropName} from '../actions/actions';
import { connect } from 'react-redux';

class LocaleForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      option: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
     let prop = this.userOption.options[this.userOption.selectedIndex].value;
     this.setState({
        option: prop
     });
    fetch('/userproperty/' + prop).then(response => response.json()).then(data => {
       this.props.dispatch(getLocaleData(data));
       this.props.dispatch(getPropName(prop));
    })
  }

  render(){
    return (
      <div class= "row">
        <form className="form-group col-md-2" onSubmit={e => this.handleSubmit(e)}>
          <select className="form-control" name="locale" ref={value => this.userOption = value} autofocus>
            <option value="quotationStart">quotationStart</option>
            <option value="quotationEnd">quotationEnd</option>
            <option value="alternateQuotationStart">alternateQuotationStart</option>
            <option value="alternateQuotationEnd">alternateQuotationEnd</option>
          </select>
          <button className="btn btn-primary btn-md">Click</button>
        </form>
        <h3>{this.state.option ? "You selected:" : null} {this.state.option}</h3>
      </div>
    )
  }
}

export default connect()(LocaleForm);