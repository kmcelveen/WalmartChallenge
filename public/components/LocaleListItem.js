import React from 'react';
import { connect } from 'react-redux';

class LocaleListItem extends React.Component {
  contructor(props){
    super(props)
  }
  render(){
    console.log('from localeListItem', this.props)
    return (
      <li><li>
    )
  }
}

function mapStateToProps(state){
  return {
    localeList : state.localeList,
    propertyName: state.propertyName
  }
}
export default connect(mapStateToProps)(LocaleListItem);