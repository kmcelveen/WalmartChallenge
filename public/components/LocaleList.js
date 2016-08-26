import React from 'react';
import { connect } from 'react-redux';
import {getLocaleData, getPropName, getDelimiter} from '../actions/actions';

class LocaleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      country: ''
    };
  }

  handleContent(country){
    fetch('/location/' + country).then(response => response.json()).then(data => {
      let queryDelimiterValue = data.main[country].delimiters[this.props.propertyName];
      let propertyDelimiterValue = JSON.stringify(queryDelimiterValue);
      this.setState({
        value: propertyDelimiterValue,
        country: country
      });
      this.props.dispatch(getDelimiter(propertyDelimiterValue));
    });
  }

  render(){

    let listItemStyles = {
      cursor:"pointer",
      backgroundColor:"#D6D6D6",
      fontFamily: 'Baloo Tamma, cursive',
      fontWeight: 'bold',
      marginBottom: '5'
    };

    return (
      <div className="row">
        <div className="col-sm-4">
          <ul className= "list-group">
            {this.props.list ? this.props.list.map((item, index) => {
              let country = item.path.split('/')[1]
             return <li style={listItemStyles} className="list-group-item" key={index} onClick={() => this.handleContent(country)}>{country}</li>;
            }): null}
          </ul>
        </div>
        <div className="col-sm-4">
          <h2>{this.state.value.length ? "Output for" : null} {this.state.country}</h2>
          <h1>{this.state.value.length ? this.state.value : null}</h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    localeList : state.localeList,
    propertyName: state.propertyName,
    delimiter: state.delimiter
  };
}

export default connect(mapStateToProps)(LocaleList);
