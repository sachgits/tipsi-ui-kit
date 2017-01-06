import React, { Component, PropTypes } from 'react'
import Page from './Page'
import Block from './Block'

export default class Example extends Component {
  static propTypes = {
    routeProps: PropTypes.object.isRequired,
  }

  renderExample = (example, key) => (
    <Block
      key={key}
      title={example.title}
      description={example.description}
      render={example.render}
    />
  )

  render() {
    const { routeProps } = this.props

    return (
      <Page {...routeProps}>
        {routeProps.examples.map(this.renderExample)}
      </Page>
    )
  }
}
