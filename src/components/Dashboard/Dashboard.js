import React from 'react';
import AccountCardListItem from '../Account/AccountCardListItem.js'
import Box from '@material-ui/core/Box';

class Dashboard extends React.Component {
  render() {
    return <Box>
      <span>Dashboard Component</span>
      <AccountCardListItem />
    </Box>;
  }
}

export default Dashboard;
