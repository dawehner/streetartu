import React from 'react';
import Header from '../Header.js';
import { connect } from 'react-redux'

import { addImage } from '../../actions';

class AddImage extends React.Component {

  constructor (props, context) {
    super(props, context);

    this.state = {};

    this.state.uri = '';
    this.state.info = '';

    this.handleUriChange = this.handleUriChange.bind(this);
    this.handleInfoChange = this.handleInfoChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleUriChange (e) {
    this.setState({uri: e.target.value});
  }

  handleInfoChange (e) {
    this.setState({info: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:3000/entries', {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    }).then(this.redirect);
  }

  redirect (response) {
    console.log(response);
    console.log(this.state);
    this.context.store.dispatch(addImage(this.state.uri, this.state.info));
    this.context.router.push('/');
  }

  render() {
    return <div><Header />
      <form onSubmit={this.handleSubmit}>
          <label>Image URI
            <input type="textfield" onChange={this.handleUriChange} />
          </label>
          <label>Image info
            <input type="textfield" onChange={this.handleInfoChange} />
          </label>
          <input type="submit" value="Add image" />
      </form>
    </div>;
  }
}
AddImage.contextTypes = {
  router: React.PropTypes.object.isRequired,
  store: React.PropTypes.object
};

module.exports = AddImage;

