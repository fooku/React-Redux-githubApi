// views/users/UserRepository.js

import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'

import RepoCard from '../../components/repoCard'
import { fetchRepos } from '../../actions'

class UserRepository extends PureComponent {
  componentDidMount() {
    const { username, dispatch } = this.props

    dispatch(fetchRepos(username))
  }
  render() {
    const { repos } = this.props
    const repoCard = repos.map(repos => (
      <RepoCard key={repos.id} repos={repos} />
    ))
    return (
      <Fragment>
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="title">Repositories</h2>
          </div>

          {!repos.isFetching && repoCard}
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  isFetching: state.repos.isFetching,
  repos: state.repos.data
})

export default connect(mapStateToProps)(UserRepository)
