import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'
import classNames from 'classnames'

const buttonChildrenStyle = {verticalAlign: 'middle'}

/**
 * Beetrack Test App custom button
 */
export default class BTButton extends PureComponent {

  render() {
    let {className, iconLeft, iconRight, children, ...buttonProps} = this.props

    className = className && className.split(' ')
    const buttonClassName = classNames('bt-button', 'xs-block', className)

    const iconLeftClassName = classNames('icon-left', 'fa', {[`fa-${iconLeft}`] : !!iconLeft})
    const iconRightClassName = classNames('icon-right', 'fa', {[`fa ${iconRight}`] : !!iconRight})
    const iconL = iconLeft && <i className={iconLeftClassName}/>
    const iconR = iconRight && <i className={iconRightClassName}/>

    return (
      <Button className={buttonClassName} {...buttonProps}>
        <span style={buttonChildrenStyle}>
          {iconL}{children}{iconR}
        </span>
      </Button>
    )
  }

  static get propTypes() {
    return {
      className: PropTypes.string,
    }
  }

  static get displayName() {
    return 'BTButton'
  }
}
