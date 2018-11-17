import React from 'react'

export default ({ repos }) => (
  <div className="column is-3">
    <div className="card is-fixed-height">
      <div className="card-content">
        <div>
          <p className="subtitle has-text-weight-bold">{repos.name}</p>
          <p>
            <i className="far fa-star" /> {repos.stargazers_count}
            {repos.language ? (
              <span
                className="tag is-rounded"
                style={{
                  float: 'right'
                }}
              >
                {repos.language}
              </span>
            ) : null}
          </p>
        </div>

        <a className="button is-info" href={repos.html_url} target="_blank">
          <span className="icon">
            <i className="fas fa-link" />
          </span>
        </a>
      </div>
    </div>
  </div>
)
