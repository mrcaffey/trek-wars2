import React from 'react' 
import {
  Header,
  Segment,
  List, 
  Image,
} from 'semantic-ui-react';
import axios from 'axios';
//import Startreklogo from '../images/treklogo.png';
import Location from './Location'; 
import { fetchLocations } from '../reducers/locations';
import { connect } from 'react-redux';

class StartrekLocations extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLocations("startrek"))
  }

  displayLocations = () => {
    return this.props.locations.map( location => {
      return(
        <Location location={location} resetLocations={this.resetLocationState} />
      )
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Trek</Header>
        <List bulleted>
          { this.displayLocations() }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  }
}

export default connect(mapStateToProps)(StartrekLocations);