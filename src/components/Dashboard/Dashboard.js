import React from 'react';
import AccountCard from '../Account/AccountCard.js'
import Box from '@material-ui/core/Box';

class Dashboard extends React.Component {
  render() {
    return <Box>
      <span>Dashboard Component</span>
      <AccountCard
        accountId='1'
        accountName='Itau'
        accountType='checking'
        currency='R$'
      />
    </Box>;
  }
}

export default Dashboard;
