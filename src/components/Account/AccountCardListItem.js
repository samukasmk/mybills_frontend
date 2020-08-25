import React from 'react';
import Box from '@material-ui/core/Box';
import AccountCard from './AccountCard.js'


import API from '../../Api';

class AccountCardListItem extends React.Component {
  state = {
    accountCards: []
  }

  componentDidMount() {
    API.get('/accounts/')
      .then(response => {
        let accountCards = response.data.map((account) =>
          <AccountCard
            key={ account.id }
            accountId={ account.id }
            accountName={ account.name }
            accountType={ account.account_type }
            currency='R$'
          />
        )
        this.setState({accountCards: accountCards});
      })
  }

  render() {
    return <Box display="flex" flexDirection="row" justifyContent="flex-start">
      { this.state.accountCards }
    </Box>
  }
}

export default AccountCardListItem;
