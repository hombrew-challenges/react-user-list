import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import BTHeader from './header'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <BTHeader/>
        <div className="BT-content">
          {this.props.children}
        </div>
      </div>
    )
  }

  static get propTypes() {
    return {
      children: PropTypes.object.isRequired
    }
  }
}

