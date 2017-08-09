import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'

/**
 * Beetrack Test App custom Input
 */
export default class BTInput extends PureComponent {

  render() {
    const {id, label, help, validations, ...props} = this.props

    const lableClassName = classNames({'label-required': validations.includes('required')})
    return (
      <FormGroup controlId={id} className='bt-input xs-block margin-bottom-10-xs'>
        {label && (
          <ControlLabel className={lableClassName}>
            <strong>{label}</strong>
          </ControlLabel>
        )}
          <FormControl {...props}/>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }

  static get propTypes() {
    return {
      id: PropTypes.string.isRequired,
      validations: PropTypes.array,
      help: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]),
      label: PropTypes.string
    }
  }

  static get displayName() {
    return 'BTInput'
  }
}
