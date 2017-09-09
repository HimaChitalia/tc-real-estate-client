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

  changeCount = event => {
    this.updateState(event);
  }

  updateState = (event) => {
    console.log(this.state.likes)
    console.log(this.state.dislikes)

    if (event.target.dataset.likes) {
      this.setState({
        likes: this.state.likes + 1,
        dislikes: this.state.dislikes,
        key: this.state.key
      }, this.submitUpdate)
    } else if (event.target.dataset.dislikes) {
      this.setState({
        likes: this.state.likes,
        dislikes: this.state.dislikes + 1,
        key: this.state.key
      }, this.submitUpdate)
    }

  }

  submitUpdate = () => {
    this.props.updateArticleLikes(this.state)
  }

  render(){
    const {item } = this.props
    return(
      <div key={item.key} >
        <h4> - <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} </a></h4>
        <button onClick ={ this.changeCount }  data-likes={item.likes} value={item.key}>Upvote { this.state.likes }</button>
        <button onClick ={ this.changeCount }  data-dislikes={item.dislikes} value={item.key}>Downvote { this.state.dislikes }</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateArticleLikes, updateArticleDislikes }, dispatch);
};


export default connect(null, mapDispatchToProps)(NewsItem);
