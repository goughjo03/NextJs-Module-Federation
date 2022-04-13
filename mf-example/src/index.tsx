import { Component } from 'react'
import Router from './Router';
export class MfExample extends Component<any, any> {
  /**
   * function to dispatch custom event
   */
  dispatchEvent = () => {
    const event = new CustomEvent('mf-example-event', {
      detail: {
        message: 'Hello from the MfExample component!',
      },
    });
    window.dispatchEvent(event);
  };

  render() {
    return (
      <div>
        <h4>Remote Element</h4>
        <button type="button" onClick={this.dispatchEvent}>Dispathc Event</button>
        <Router route={this.props.route || ''} />
      </div>
    )
  }
}

export default MfExample
