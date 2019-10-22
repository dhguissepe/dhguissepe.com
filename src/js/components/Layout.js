import React, { Fragment, Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import store from '../../redux/store.js'
import { navigationUpdate } from '../../redux/modules/navigation'

function mapStateToProps(state) {
  return {
    navbarLinks: state.navigation.navbarLinks,
  }
}
class Layout extends Component {

  handleClick = (e) => {
    store.dispatch(navigationUpdate(e.target.id))
    this.setState({ pageIndex: e.target.id })
  }

  render() {
    return (
      <Fragment>
        <Header navbarLinks={ this.props.navbarLinks } onClick={ this.handleClick } />
          {this.props.children}
        <Footer navbarLinks={ this.props.navbarLinks } onClick={ this.handleClick } />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps)(Layout)