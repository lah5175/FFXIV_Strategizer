import React from 'react';
import axios from 'axios';
import '../../stylesheets/contactForms.css';

class BugReport extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      severity: 'Trivial',
      replicate: false,
      message: '',
      messageChars: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const chars = event.target.name === 'message'
    ? event.target.value.length
    : this.state.messageChars;

    this.setState({
      [event.target.name]: event.target.value,
      messageChars: chars,
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.post('/api/email/bugs', this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <h1>Bug Report</h1>

        <div className="form-field-div">
          <label htmlFor="email">Contact Email</label>
          <div>
            <input type="text" name="email" placeholder="Your email address" value={this.state.email} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-field-div">
          <label htmlFor="severity">Bug Severity</label>
          <div>
            <select name="severity" value={this.state.severity} onChange={this.handleChange}>
              <option value="Trivial">Trivial</option>
              <option value="Minor">Minor</option>
              <option value="Major">Major</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </div>

        <div className="form-field-div">
          <label htmlFor="replicate">Can be Replicated</label>
          <div>
            <select name="replicate" value={this.state.replicate} onChange={this.handleChange}>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
          </div>
        </div>

        <div className="form-message-div">
          <label htmlFor="message" value={this.state.message}>Message</label>
          <textarea name="message" value={this.state.message} maxLength={10000} required onChange={this.handleChange}
            placeholder="Please describe your bug and the steps you took to replicate it in as much detail as possible!" />
          <p>{this.state.messageChars}/10000 characters used</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default BugReport;