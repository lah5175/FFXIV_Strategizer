import React from 'react';
import {connect} from 'react-redux';
import Sidebar from './Sidebar';
import Main from './Main';
import {fetchSingleStrategy} from '../../store';
import '../../stylesheets/StratContainer.css';

class StratContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStrategy(this.props.match.params.stratId);
  }
  
  render() {
    if (this.props.strategy.id) {
      return (
        <div id="strat-container">
          <Sidebar phases={this.props.strategy.phases} />
          <Main />
        </div>
      )
    }
    else return <div>Loading...</div>
  }
}

const mapStateToProps = state => ({
  strategy: state.strategy.singleStrategy
})

const mapDispatchToProps = dispatch => ({
  fetchSingleStrategy: (stratId) => dispatch(fetchSingleStrategy(stratId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StratContainer);