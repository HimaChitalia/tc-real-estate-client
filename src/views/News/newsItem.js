import React from 'react'

const NewsItem = ({ item: { key, title, url }}) =>
  <div key={key} >
      <h4> - <a href={url} target='_blank' >{title} </a></h4>
  </div>

export default NewsItem;
