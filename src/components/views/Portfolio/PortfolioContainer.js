import { connect } from 'react-redux';
import Portfolio from './Portfolio';
import { getMode, getLanguage } from '../../../redux/globalRedux';
import { getContent, getLang, getPortfolio } from '../../../redux/portfolioRedux';

const mapStateToProps = (state) => ({
  mode: getMode(state),
  language: getLanguage(state),
  content: getContent(state),
  contentLang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  getPortfolio: (lang) => dispatch(getPortfolio(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
