import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchNews } from '../../actions/getNews'
import NewsItem from './newsItem'

class News extends Component {

  componentDidMount() {
    this.props.fetchNews()
  }

  showNews = () => {

    const { news } = this.props.news

    return  news !== undefined && news !== [] ?
    <div className='divMargin'>
      <ul className='uk-list uk-list-striped'>
          {news.map(item => <li><div key={item.key}><NewsItem item={item} /></div></li>)}
      </ul>
    </div> :
    <div><h2> Please wait for the industry news to Load! </h2> </div>
  }


  render() {
    return (
      <div>
        {this.showNews()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchNews }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
