import React from 'react';
import { connect } from 'react-redux';
import LocaleForm from './LocaleForm';
import LocaleList from './LocaleList';
import { Appbar } from 'muicss/react';


class App extends React.Component {

  render() {
    let appBarStyles = {
      fontFamily: 'Lobster, cursive'
    }
    return (
      <div>
        <Appbar><h1 style={appBarStyles}>Delimiters</h1></Appbar>
        <LocaleForm/>
        <LocaleList list={this.props.localeList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    localeList : state.localeList,
    propertyName: state.propertyName,
  }
}
export default connect(mapStateToProps)(App);
