import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'
import {BTTable} from 'app/views/bt-components'
import {TableHeaderColumn} from 'react-bootstrap-table'

/**
 * User List Table
 */
export default class UserListTable extends PureComponent {

  constructor(props) {
    super(props)
    this.nameFormat = this.nameFormat.bind(this)
  }

  /**
   * Format method for the name column
   * @param {Any} name cell value (in this case 'name')
   * @param {Object} row Object with current row values
   */
  nameFormat(name, row) {
    const {deleteUser} = this.props
    const {photo, id} = row
    return (
      <div className="bt-table-name-format">
        <div
          className='picture pull-left img-responsive img-circle margin-right-15'
          style={{backgroundImage: `url('${photo}')`}}/>
        <div className="name padding-top-10"><strong>{name}</strong></div>
        <div className="delete">
          <span
            className="clickable margin-left-5"
            onClick={() => deleteUser(id)}>
            Eliminar
          </span>
        </div>
      </div>
    )
  }


  render() {
    const {data, currentPage, pageLimit, onPageChange} = this.props
    return (
      <Col xs={12}>
        <BTTable
          data={data}
          currentPage={currentPage}
          pageLimit={pageLimit}
          onPageChange={onPageChange}>
          <TableHeaderColumn dataField="id" hidden isKey/> 
          <TableHeaderColumn
            columnClassName="hovered-column"
            dataField="name"
            width="300px"
            dataFormat={this.nameFormat}>
            Nombre
          </TableHeaderColumn>
          <TableHeaderColumn
            className="hidden-xs"
            columnClassName="hidden-xs description-column"
            dataField="description">
            Descripción
          </TableHeaderColumn>   
        </BTTable>
      </Col>
    )
  }

  static get propTypes() {
    return {
      data: PropTypes.object.isRequired,
      deleteUser: PropTypes.func.isRequired,
      currentPage: PropTypes.number.isRequired,
      pageLimit: PropTypes.number.isRequired,
    }
  }

  static get displayName() {
    return 'views/user-list/table'
  }
}

