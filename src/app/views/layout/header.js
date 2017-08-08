import React, {PureComponent} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

/**
 * Application Header
 */
export default class BTHeader extends PureComponent {
  render() {
    return (
      <Grid className="BT-header margin-top-20 margin-bottom-20">
        <Row>
          <Col xs={12}>
            Test <strong>Beetrack</strong>
          </Col>
        </Row>
      </Grid>
    )
  }
}