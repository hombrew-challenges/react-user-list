import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl} from 'react-bootstrap'

/**
 * Beetrack Test App custom Search Input
 */
export default class BTSearchInput extends PureComponent {

  render() {
    const {id, label, ...props} = this.props
    return (
      <FormGroup controlId={id} className='bt-search-input no-margin xs-block margin-bottom-10-xs'>
        <FormControl {...props}/>
      </FormGroup>
    )
  }

  static get propTypes() {
    return {
      id: PropTypes.string.isRequired
    }
  }

  static get displayName() {
    return 'BTSearchInput'
  }
}
