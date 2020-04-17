import React from 'react';
import axios from 'axios';
import '../../stylesheets/contactForms.css';

class GeneralForm extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: '',
      name: '',
      email: '',
      message: '',
      messageChars: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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

  async handleSubmit(event, type) {
    event.preventDefault();
    await axios.post('/api/email/', {...this.state, type: type});
    this.props.history.push('/');
  }

  render() {
    let type = '';

    if (this.props.location.pathname.includes('question')) type = 'Questions';
    else if (this.props.location.pathname.includes('business')) type = 'Business-Related';
    else type = 'Suggestions';

    return (
      <form className="form-container" onSubmit={(event) => this.handleSubmit(event, type)}>
        <h1>{type}</h1>

        {type === 'Business-Related' &&
          <div id="business-div">
            <div className="form-field-div" id="organization-div">
              <label htmlFor="organization">Organization Name</label>
              <div>
                <input type="text" name="organization" value={this.state.organization} onChange={this.handleChange} placeholder="Your organization name here" />
              </div>
            </div>

            <div className="form-field-div">
              <label htmlFor="name">Contact Name</label>
              <div>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your contact name here" />
              </div>
            </div>
          </div>
        }

        <div className="form-field-div">
          <label htmlFor="email">Contact Email</label>
          <div>
            <input type="text" name="email" placeholder="Your email address" value={this.state.email} onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-message-div">
          <label htmlFor="message" value={this.state.message}>Message</label>
          <textarea name="message" value={this.state.message} maxLength={10000} required onChange={this.handleChange}
            placeholder="Please leave your feedback here!" />
          <p>{this.state.messageChars}/10000 characters used</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default GeneralForm;