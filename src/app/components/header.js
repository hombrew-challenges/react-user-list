import React, {PureComponent} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class BTHeader extends PureComponent {
  render() {
    return (
      <Grid className="BT-header margin-top-20 margin-bottom-20">
        <Row>
          <Col xs={12}>
            Test <strong>Beetrack</strong> <i className="fa fa-home"/>
          </Col>
        </Row>
      </Grid>
    )
  }
}