import React from 'react';
import Box from '@material-ui/core/Box';

import API from '../../Api';


class AccountCard extends React.Component {
  state = {
    accountTotalBalance: null
  }

  async componentDidMount() {
    API.get('/accounts/1/balance/total/')
      .then(response => {
        const accountData = response.data;
        this.setState({accountTotalBalance: accountData['total']});
      })
  }

  render() {
    return <Box border={1} borderColor="primary.main" borderRadius="borderRadius" width="200px" position="center">
      { this.state.accountTotalBalance }
    </Box>;
  }
}

export default AccountCard;
