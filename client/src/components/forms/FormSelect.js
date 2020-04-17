import React from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/contactForms.css';

const FormSelect = props => {
  return (
    <div id='contact-selector'>
      <h1>Please select the subject of your query:</h1>
      <Link className='contact-link' to="/contact/bugs">Bug Report</Link>
      <Link className='contact-link' to="/contact/questions">Question</Link>
      <Link className='contact-link' to="/contact/suggestions">Suggestion</Link>
      <Link className='contact-link' to="/contact/business">Business-Related</Link>
    </div>
  )
}

export default FormSelect;