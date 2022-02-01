import { connect } from 'react-redux';
import Header from './Header';
import { getNavbarElementsPL, getNavbarElementsENG } from '../../../redux/headerRedux';
import { getMode, getLanguage, setDarkMode, enableLoading } from '../../../redux/globalRedux';

const mapStateToProps = (state) => ({
  elementsPL: getNavbarElementsPL(state),
  elementsENG: getNavbarElementsENG(state),
  mode: getMode(state),
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
