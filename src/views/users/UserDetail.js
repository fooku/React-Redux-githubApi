import React, { PureComponent } from 'react'
import { fetchUsername } from '../../actions'
import { connect } from 'react-redux'

import ReactPlayer from 'react-player'

class UserDetail extends PureComponent {
  componentDidMount() {
    const { match, dispatch } = this.props
    const { username } = match.params

    dispatch(fetchUsername(username))
  }
  render() {
    const { user } = this.props
    return (
      <div>
        <p>{user.name}</p>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
        />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
})

export default connect(mapStateToProps)(UserDetail)
