import React from 'react';
import { connect } from 'react-redux'


class LocaleList extends React.Component {
  handleContent(country){
    console.log('this is the country', country)
    fetch('/api2/' + country).then(response => response.json()).then(data => {
      console.log('in handleContent', data);
      var shit = data.main[country].delimiters[this.props.propertyName]
      console.log('this is shit', JSON.stringify(shit));
    })
  }
  render(){
    console.log('from localList', this.props)
    return (
      <div>
        <ul>
          {this.props.list ? this.props.list.map((item, index) => {
            var country = item.path.split('/')[1]
           return <li key={index} onClick={() => this.handleContent(country)}>{country}</li>;
          }): null}
        </ul>
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
export default connect(mapStateToProps)(LocaleList);