import React from 'react';
import { connect } from 'react-redux'
import {getLocaleData, getPropName, getDelimiter} from '../actions/actions'




class LocaleList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      country: ''
    }
  }
  handleContent(country){
    // console.log('this is the country', country)
    fetch('/location/' + country).then(response => response.json()).then(data => {
      // console.log('in handleContent', data);
      var shit = data.main[country].delimiters[this.props.propertyName]
      // console.log('this is shit', JSON.stringify(shit));
      var dem = JSON.stringify(shit)
      this.setState({
        value: dem,
        country: country
      })
      this.props.dispatch(getDelimiter(dem))
    })
  }

  render(){
    var style = {
      position: 'absolute',
      left: '60%',
      top: '20%',
      width: '30%',
      textAlign: 'center',
      fontSize: '18px'
    };
    var style2 = {
      listStyleType: 'none',
      cursor: 'pointer'
    };
    console.log('from localeList', this.props)
    return (
      <div>
        <ul>
          {this.props.list ? this.props.list.map((item, index) => {
            var country = item.path.split('/')[1]
           return <li style={style2} key={index} onClick={() => this.handleContent(country)}>{country}</li>;
          }): null} 
        </ul>
        <div style={style}>
          <h2>{this.state.value.length ? "Output for" : null} {this.state.country}</h2>
          <h1>{this.state.value.length ? this.state.value : null}</h1>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    localeList : state.localeList,
    propertyName: state.propertyName,
    delimiter: state.delimiter
  }
}
export default connect(mapStateToProps)(LocaleList);