import React, { PureComponent } from 'react'
import { fetchUsername } from '../../actions'
import { connect } from 'react-redux'

import BackButton from '../../components/backButton'
import UserRepository from './UserRepository'

class UserDetail extends PureComponent {
  componentDidMount() {
    const { match, dispatch } = this.props
    const { username } = match.params

    dispatch(fetchUsername(username))
  }
  render() {
    const { user } = this.props
    return (
      <section className="section">
        <div className="container">
          <BackButton to="/" />
          <div className="columns">
            <div className="column is-3">
              <figure className="image is-square">
                <img
                  className="is-rounded"
                  src={user.avatar_url}
                  alt="User Avatar"
                />
              </figure>
            </div>
            <div className="column is-9">
              <h2 className="title">{user.name}</h2>
              <p className="subtitle">{user.company}</p>

              <p>location : {user.location}</p>
              <p>bio : {user.bio}</p>

              <br />

              <nav className="columns ">
                <div className="column has-text-left">
                  <div>
                    <p className="heading">Repos</p>
                    <p className="title">{user.public_repos}</p>
                  </div>
                </div>
                <div className="column  has-text-left">
                  <div>
                    <p className="heading">Followers</p>
                    <p className="title">{user.followers}</p>
                  </div>
                </div>
                <div className="column  has-text-left">
                  <div>
                    <p className="heading">Following</p>
                    <p className="title">{user.following}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {user.login && <UserRepository username={user.login} />}
        </div>
      </section>
    )
  }
}
const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  user: state.user.data
})

export default connect(mapStateToProps)(UserDetail)
