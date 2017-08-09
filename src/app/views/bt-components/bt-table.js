import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Row, Col} from 'react-bootstrap'
import {BootstrapTable} from 'react-bootstrap-table'
import Immutable from 'immutable'
import classNames from 'classnames'

/**
 * Beetrack Test App custom Table Component
 */
export default class BTTable extends PureComponent {

  constructor(props) {
    super(props)
    this.toNextPage = this.toNextPage.bind(this)
    this.toPrevPage = this.toPrevPage.bind(this)
  }

  /**
   * Select next page
   */
  toNextPage() {
    const {onPageChange, currentPage} = this.props
    if (onPageChange && currentPage) {
      onPageChange(currentPage + 1)
    }
  }

  /**
   * Select prev page
   */
  toPrevPage() {
    const {onPageChange, currentPage} = this.props
    if (onPageChange && currentPage) {
      onPageChange(currentPage - 1)
    }
  }

  render() {
    let {options = {}, data, currentPage, pageLimit, className, ...tableProps} = this.props

    className = className && className.split(' ')
    const tableClassName = classNames('bt-table', className)

    const defaultOptions = {
      noDataText: '¡Añade algunos usuarios primero!'
    }
    const newOptions = {...defaultOptions, ...options}
    if(Immutable.Iterable.isIterable(data)) {
      data = data.toJS()
    }

    const renderPrevPage = currentPage > 1
    const renderNextPage = data.length === pageLimit

    return (
      <div className="bt-table-wrapper">
        <Row className="margin-bottom-10">
          <Col xs={12}>
            <BootstrapTable
              bordered
              condensed
              pagination={false}
              striped={false}
              data={data}
              options={newOptions}
              className={tableClassName}
              {...tableProps}/>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            {renderPrevPage && (
              <span className="change-page clickable" onClick={this.toPrevPage}>
                <i className="fa fa-arrow-circle-left"/> Página anterior
              </span>
            )}
          </Col>
          <Col xs={6}>
            {renderNextPage && (
              <span className="change-page pull-right clickable" onClick={this.toNextPage}>
                Página siguiente <i className="fa fa-arrow-circle-right"/>
              </span>
            )}
          </Col>
        </Row>
      </div>
    )
  }

  static get propTypes() {
    return {
      options: PropTypes.object,
      data: PropTypes.object.isRequired,
    }
  }

  static get displayName() {
    return 'BTTable'
  }
}
