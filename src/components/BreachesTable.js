import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  topOfTable: {
    padding: 10
  },
  columnHeaders: {
    cursor: 'pointer'
  }

});

function BreachesTable(props) {
  const classes = useStyles();

  const [searchFilter, setSearchFilter] = useState('')
  const [sortState, setSortState] = useState({ header: 'Name', ascending: true })

  const breaches = props.breaches;
  if (breaches === undefined) {
    return <div />
  }

  const updateSortState = (header) => {
    if (sortState.header === header) {
      setSortState({ header, ascending: !sortState.ascending })
    } else {
      setSortState({ header, ascending: true })
    }
  }

  function compareForSort(a, b) {
    const aVal = a[sortState.header]
    const bVal = b[sortState.header]

    if (aVal === bVal) {
      return 0
    }
    if (sortState.ascending) {
      return aVal < bVal ? -1 : 1
    } else {
      return aVal < bVal ? 1 : -1
    }
  }

  const pwndText = breaches.length === 0 ? 'Congratulations, you have not been pwnd!' : "Sorry, you've been pwnd!"

  const rows = breaches.filter(row => rowMatchesFilter(searchFilter, row)).map(prepareRow).sort(compareForSort)

  return (
    <Grid container direction={'column'} spacing={1}>

      <Grid item container justify={'center'}>
        <Grid item xs={9}>

          <Grid>
            <TableContainer component={Paper}>
              <Grid container direction={'row'} justify='space-between' spacing={1} className={classes.topOfTable}>
                <Grid item>
                  <Typography variant='h5'>{pwndText}</Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="search-box"
                    label="Search"
                    size='small'
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Table className={classes.table} aria-label="breaches table">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'Name'} displayName='Name' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'Domain'} displayName='Domain' align='right' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'BreachDate'} displayName='Breach Date' align='right' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'IsVerified'} displayName='Verified' align='right' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'PwnCount'} displayName='Pwn Count' align='right' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'UsernamePwnd'} displayName='Username Pwnd' align='right' />
                    <TableHeaderCell updateSortState={updateSortState} sortState={sortState} name={'PasswordPwnd'} displayName='Password Pwnd' align='right' />



                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row['Description']}>
                      <TableCell>{row['Name']}</TableCell>
                      <TableCell align="right">{row['Domain']}</TableCell>
                      <TableCell align="right">{row['BreachDate']}</TableCell>
                      <TableCell align="right">{row['IsVerified']}</TableCell>
                      <TableCell align="right">{row['PwnCount']}</TableCell>
                      <TableCell align="right">{row['UsernamePwnd']}</TableCell>
                      <TableCell align="right">{row['PasswordPwnd']}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function prepareRow(row) {
  // Shallow copy to avoid modifying the objects in state
  row = { ...row }
  // Convert everything to string to simplify sorting
  row['UsernamePwnd'] = `${row['DataClasses'].includes('Usernames')}`
  row['PasswordPwnd'] = `${row['DataClasses'].includes('Passwords')}`
  row['IsVerified'] = `${row['IsVerified']}`
  return row
}

const rowMatchesFilter = (filter, row) => {
  if (!filter || filter.trim().length === 0) {
    return true
  }

  const lcFilter = filter.toLowerCase()
  const headers = ['Name', 'Domain', 'BreachDate', 'IsVerified', 'PwnCount']
  const filterMatches = headers.map(h => `${row[h]}`).filter(r => r.indexOf(lcFilter) >= 0)

  return filterMatches.length > 0
}

function TableHeaderCell(props) {
  const classes = useStyles();
  const name = props.name

  const sortState = props.sortState
  const updateSortState = props.updateSortState

  let displayName = props.displayName


  if (sortState.header === name) {
    const arrow = sortState.ascending ? '⬆' : '⬇'
    displayName += ' ' + arrow
  }

  return (
    <TableCell className={classes.columnHeaders} align={props.align} onClick={() => updateSortState(name)}>{displayName}</TableCell>
  )
}

export default BreachesTable
