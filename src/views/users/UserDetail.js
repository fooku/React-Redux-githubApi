import React, { PureComponent } from 'react'
import { fetchUsername } from '../../actions'
import { connect } from 'react-redux'

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
        </div>
    )
  }
}
const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
})

export default connect(mapStateToProps)(UserDetail)
