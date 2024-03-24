// Write your code here
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

class MovieItem extends Component {
  state = {isClose: false}

  close = () => {
    this.setState(old => ({isClose: !old.isClose}))
  }

  render() {
    const {eachItem} = this.props
    const {isClose} = this.state
    return (
      <div className="cont">
        <Popup
          position="top center"
          modal
          open={isClose}
          trigger={
            <img
              src={eachItem.thumbnailUrl}
              className="eachImg"
              alt="thumbnail"
              key={eachItem.id}
            />
          }
        >
          <div className="popup-container">
            <button
              data-testid="closeButton"
              type="button"
              onClick={this.close}
            >
              <IoMdClose />
            </button>
            <ReactPlayer width="500px" url={eachItem.videoUrl} controls />
          </div>
        </Popup>
      </div>
    )
  }
}

export default MovieItem
