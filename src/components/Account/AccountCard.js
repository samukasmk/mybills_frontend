import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import LocalAtmOutlinedIcon from '@material-ui/icons/LocalAtmOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import API from '../../Api';

// component styles
const styles = theme => ({
  root: {
    maxWidth: 280,
  },
});

const iconsByAccountType = {
  checking: <AccountBalanceOutlinedIcon fontSize="large" color="secondary" />,
  savings: <LocalAtmOutlinedIcon fontSize="large" color="secondary" />,
  wallet: <AccountBalanceWalletOutlinedIcon fontSize="large" color="secondary" />,
  investments: <TrendingUpOutlinedIcon fontSize="large" color="secondary" />,
  other: <LocalAtmOutlinedIcon fontSize="large" color="secondary" />
}


class AccountCard extends React.Component {
  state = {
    accountTotalBalance: null
  }

  async componentDidMount() {
    API.get('/accounts/{ this.accountId }/balance/total/')
      .then(response => {
        const accountData = response.data;
        this.setState({accountTotalBalance: accountData['total']});
      })
  }

  render() {
    const { classes } = this.props;
    return <Card className={classes.root}>
      <CardHeader
        avatar={
            iconsByAccountType[this.props.accountType]
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h6" component="p">
            { this.props.accountName }
          </Typography>
        }
        subheader={
          <Typography variant="caption" color="textSecondary">
            { this.props.accountType }
          </Typography>
        }
      />
      <CardContent>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="subtitle2" color="textSecondary">
            Saldo atual
          </Typography>
          <Typography variant="subtitle2">
             { this.props.currency } { this.state.accountTotalBalance }
          </Typography>
        </Box>
      </CardContent>
    </Card>
  }
}

AccountCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountCard);
