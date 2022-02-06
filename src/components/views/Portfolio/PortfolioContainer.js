import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getPL, getENG } from '../../../redux/portfolioRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  contentPL: getPL(state),
  contentENG: getENG(state),
});

export default connect(mapStateToProps)(Portfolio);
