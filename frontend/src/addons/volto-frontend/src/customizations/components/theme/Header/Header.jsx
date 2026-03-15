/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
} from '@plone/volto/components';

/**
 * Header component class.
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    token: PropTypes.string,
    pathname: PropTypes.string.isRequired,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    token: null,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */

  render() {
    return (
      <Segment basic className="header-wrapper" role="banner">
        <Container>
          <div className="header">
            <div className="logo-nav-wrapper">
              <div className="logo" >
                <Logo />
              </div>
              <Navigation pathname={this.props.pathname} />
              <LanguageSelector />
              {!this.props.token && (
                <div className="tools">
                  <Button compact color="grey" as={Link} to="/login">
                    <FormattedMessage id="Admin" defaultMessage="Admin" />
                  </Button>
                </div>
              )}
              {this.props.token && (
                <div className="tools">
                  <Button compact color="grey" as={Link} to="/logout">
                    <FormattedMessage id="Logout" defaultMessage="logout" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default connect((state) => ({
  token: state.userSession.token,
}))(Header);
