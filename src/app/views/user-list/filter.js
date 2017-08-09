import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'
import {BTButton, BTSearchInput} from 'app/views/bt-components'

/**
 * User List Filter
 */
export default class UserListFilter extends PureComponent {

  constructor(props) {
    super(props)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.filterRef = this.filterRef.bind(this)
  }

  /**
   * handle Input Change every 500ms (to minimize api calls)
   */
  handleSearchInputChange() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.props.updateFilter({q: this.filter.value})
    }, 500)
  }

  /**
   * Input reference to handle its value
   * @param {object} ref 
   */
  filterRef(ref) {
    this.filter = ref
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={6}>
          <BTSearchInput
            id='user-list-search-input'
            placeholder='Buscar contacto...'
            inputRef={this.filterRef}
            onChange={this.handleSearchInputChange}
            />
        </Col>
        <Col xs={12} sm={6}>
          <BTButton
            className="pull-right no-float-xs"
            iconLeft="plus-circle"
            onClick={this.props.openModal}>
            Nuevo Contacto
          </BTButton>
        </Col>
      </div>
    )
  }

  static get propTypes() {
    return {
      updateFilter: PropTypes.func.isRequired,
      openModal: PropTypes.func
    }
  }

  static get displayName() {
    return 'views/user-list/filter'
  }
}

