import React, { Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateArticleLikes } from '../../actions/updateNews';

class NewsItem extends Component {
  constructor(){
    super()

    this.state = {
      likes: 0,
      key: ''
    }
  }

  componentDidMount(){
    this.setState({
      likes: this.props.item.likes,
      key: this.props.item.key
    })
  }

  increaseCount = event => {
    this.newState(event);
  }

  newState = (event) => {
    console.log(this.state)
    event.persist()
    this.setState({
      likes: this.props.item.likes + 1,
      key: this.props.item.key
    }, this.submitUpdate)
  }

  submitUpdate = () => {
    this.props.updateArticleLikes(this.state)
  }

  render(){
    const {item } = this.props
    return(
      <div key={item.key} >
        <h4> - <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title} </a></h4>
        <button onClick ={ this.increaseCount }  data-likes={item.likes} value={item.key}>Upvote { this.state.likes }</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { updateArticleLikes }, dispatch);
};


export default connect(null, mapDispatchToProps)(NewsItem);