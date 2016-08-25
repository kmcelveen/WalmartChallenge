import React from 'react'
import {getLocaleData, getPropName} from '../actions/actions'
import { connect } from 'react-redux'

class LocaleForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      option: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
     var prop = this.userOption.options[this.userOption.selectedIndex].value
     this.setState({
        option: prop
     });
    fetch('/api/' + prop).then(response => response.json()).then(data => {
       this.props.dispatch(getLocaleData(data));
       this.props.dispatch(getPropName(prop));
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <select name="locale" ref={value => this.userOption = value}>
            <option value="quotationStart">quotationStart</option>
            <option value="quotationEnd">quotationEnd</option>
            <option value="alternateQuotationStart">alternateQuotationStart</option>
            <option value="alternateQuotationEnd">alternateQuotationEnd</option>
          </select>
          <input type='submit' value='Click'/>
        </form>
        <h3>You chose: {this.state.option}</h3>
      </div>
    )
  }
}

export default connect()(LocaleForm);