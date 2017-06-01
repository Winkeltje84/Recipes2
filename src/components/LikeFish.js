import React, { PureComponent, PropTypes } from 'react'
import './LikeFish.sass'
import HappyFish from '../images/Happy_fish.svg'
import SadFish from '../images/Sad_fish.svg'

class LikeFish extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    liked: PropTypes.bool.isRequired,
  }

  classNames() {
    const { liked, _id } = this.props
    let classes = 'like'

    if (liked) { classes += ' liked' }

    return classes
  }

  toggleLike() {
    const { liked, _id } = this.props
    // debugger
    // const { liked } = this.props
    this.props.onChange(_id, { liked: !liked })
  }

  render() {
    const { liked, _id } = this.props
    // debugger
    return (
      <div className={ this.classNames() }>
        <button onClick={ this.toggleLike.bind(this) }>
          <img className="fish_icon" style={{height: '50px'}} src={ liked ? HappyFish : SadFish } />
          <span className="copy">
            <img className="fish_icon" style={{height: '50px'}} src={ liked ? HappyFish : SadFish } />
          </span>
        </button>
        <span className="likes">{ liked ? 'You fish this!' : null }
        </span>
      </div>
    )
  }
}

export default LikeFish
