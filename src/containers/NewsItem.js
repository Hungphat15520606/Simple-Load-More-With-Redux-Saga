import React from 'react';
import { connect } from 'react-redux'


  // let NewsItem = ({ item }) => (
  //   item ?
  //   item.map((item)=>
  //     <div>     
  //       <img style={{float:'left', width:200, height:200, margin:4}}  src={item.urls.full} alt="image" />       
  //     </div>
  //   )
  //      :
  //     null
  // );

  class NewsItem extends React.Component{
    render(){
      return(
        <div>
          {this.props.item.map((item)=>
          <div>     
                <img style={{float:'left', width:200, height:200, margin:4}}  src={item.urls.full} alt="image" />       
          </div>)}
        </div>
      );
    }
  }

    const mapStateToProps = (state) => ({
        item: state.item,
      })     
      NewsItem = connect(
        mapStateToProps,
        null
    )(NewsItem)

    export default NewsItem;