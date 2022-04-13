import { Component } from 'react'
import Router from './Router';
export class MfExample extends Component<any, any> {
  render() {
    return (
      <div>
        <h4>Remote Element</h4>
        <Router route={this.props.route || ''} />
      </div>
    )
  }
}

export default MfExample
