import React, {PureComponent} from 'react'
import {Modal} from 'react-bootstrap'
import classNames from 'classnames'

/**
 * Beetrack Test App custom modal
 */
export default class BTModal extends PureComponent {

  render() {
    let {className, ...modalProps} = this.props

    className = className && className.split(' ')
    const modalClassName = classNames('bt-modal', className)

    return <Modal className={modalClassName} {...modalProps}/>
  }

  static get displayName() {
    return 'BTModal'
  }
}

