import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateArticleLikes, updateArticleDislikes } from '../../actions/updateNews';
import '../../styles/custom.css'

class NewsItem extends Component {
  constructor(){
    super()

    this.state = {
      likes: 0,
      dislikes: 0,
      key: ''
    }
  }

  componentDidMount(){
    this.setState({
      likes: this.props.item.likes,
      dislikes: this.props.item.dislikes,
      key: this.props.item.key
    })
  }

  increaseCount = event => {
    this.newState(event);
  }

  newState = (event) => {
    console.log(event.target)
    event.persist()
    this.setState({
      likes: this.props.item.likes + 1,
      dislikes: this.props.item.dislikes,
      key: this.props.item.key
    }, this.submitUpdate)
  }

  submitUpdate = () => {
    this.props.updateArticleLikes(this.state)
  }

  decreaseCount = event => {
    this.newDislikeState(event);
  }

  newDislikeState = (event) => {
    console.log(event.target)
    event.persist()
    this.setState({
      likes: this.props.item.likes,
      dislikes: this.props.item.dislikes + 1,
      key: this.props.item.key
    }, this.submitUpdate)
  }


  render(){
    const {item } = this.props
    return(
      <div key={item.key} >
        <h4> - <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} </a></h4>
        <button onClick ={ this.increaseCount }  data-likes={item.likes} value={item.key}>Upvote { this.state.likes }</button>
        <button onClick ={ this.decreaseCount }  data-dislikes={item.dislikes} value={item.key}>Downvote { this.state.dislikes }</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateArticleLikes, updateArticleDislikes }, dispatch);
};


export default connect(null, mapDispatchToProps)(NewsItem);
