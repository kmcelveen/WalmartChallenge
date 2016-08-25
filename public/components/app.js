import React from 'react';
import { connect } from 'react-redux'
import LocaleForm from './LocaleForm'
import LocaleList from './LocaleList'

class App extends React.Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <h1>Delimiters</h1>
        <LocaleForm/>
        <LocaleList list={this.props.localeList}/>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    localeList : state.localeList,
    propertyName: state.propertyName
  }
}
export default connect(mapStateToProps)(App);