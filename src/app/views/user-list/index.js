import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Grid} from 'react-bootstrap'
import {getUserList, updateUserListFilter, deleteUserFromList} from 'app/actions/users'

/**
 * User List Route
 */
class UserListView extends PureComponent {

  componentWillMount() {
    const {cached, loading} = this.props
    if (!cached && !loading) {
      this.props.getUserList()
    }
  }

  render() {
    console.log('users', this.props.users.toJS())
    return (
      <Grid className="BTPAGE__user-list">
        <button onClick={() => this.props.deleteUserFromList(1)}>DELETE</button>
      </Grid>
    )
  }

  static get propTypes() {
    return {
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