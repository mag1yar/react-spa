import React from 'react';
import { createPortal } from 'react-dom';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.titleElement = document.getElementsByTagName('title')[0];
  }

  render() {
    let fullTitle;
    if (this.props.pageTitle) fullTitle = this.props.pageTitle + ' | ' + this.props.siteTitle;
    else fullTitle = this.props.siteTitle;
    return createPortal(fullTitle || '', this.titleElement);
  }
}

Title.defaultProps = {
  pageTitle: null,
  siteTitle: 'React SPA',
};
