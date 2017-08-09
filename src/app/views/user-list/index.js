import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid, Row} from 'react-bootstrap'
import UserListFilter from './filter'
import UserListTable from './table'
import {getUserList, updateUserListFilter, deleteUserFromList} from 'app/actions/users'

/**
 * User List Route
 */
class UserListView extends PureComponent {

  constructor(props) {
    super(props)
    this.onPageChange = this.onPageChange.bind(this)
  }

  componentWillMount() {
    const {cached, loading} = this.props
    if (!cached && !loading) {
      this.props.getUserList()
    }
  }

  /**
   * Change page method
   * @param {Number} _page Page number to jump to
   */
  onPageChange(_page) {
    this.props.updateUserListFilter({_page})
  }

  render() {
    const {users, currentPage, pageLimit} = this.props
    return (
      <Grid className="BTPAGE__user-list margin-bottom-20">
        <Row className="margin-bottom-10">
          <UserListFilter updateFilter={this.props.updateUserListFilter}/>
        </Row>
        <Row>
          <UserListTable
            currentPage={currentPage}
            data={users}
            deleteUser={this.props.deleteUserFromList}
            pageLimit={pageLimit}
            onPageChange={this.onPageChange}
            />
        </Row>
      </Grid>
    )
  }

  static get propTypes() {
    return {
      currentPage: PropTypes.number,
      users: PropTypes.object.isRequired,
      getUserList: PropTypes.func,
      deleteUserFromList: PropTypes.func
    }
  }

  static get displayName() {
    return 'views/user-list'
  }
}

function mapStateToProps({users}) {
  return {
    users: users.get('list'),
    cached: users.get('cached'),
    loading: users.get('loading'),
    currentPage: users.getIn(['filters', '_page']),
    pageLimit: users.getIn(['filters', '_limit'])
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getUserList,
    updateUserListFilter,
    deleteUserFromList
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListView)