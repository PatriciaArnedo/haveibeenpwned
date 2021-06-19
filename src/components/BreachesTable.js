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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 function BreachesTable(props) {
  const classes = useStyles();

  const [searchFilter, setSearchFilter] = useState('')
  const [sortState, setSortState] = useState({header: 'Name', ascending: true})

  const breaches = props.breaches;
  if (breaches === undefined) {
    return <div/>
  }

  const  updateSortState = (header) => {
    if (sortState.header === header) {
      setSortState({header, ascending: !sortState.ascending})
    } else {
      setSortState({header, ascending: true})
    }
  }

  function compareForSort(a, b) {
    const aVal = a[sortState.header]
    const bVal = b[sortState.header]

    if (aVal === bVal) {
      return 0
    }
    if (sortState.ascending) {
      return aVal < bVal ? 1 : -1
    } else {
      return aVal < bVal ? -1 : 1
    }
  }

  const rows = breaches.filter(row => rowMatchesFilter(searchFilter, row)).sort(compareForSort)
  
  return (
    <React.Fragment>
      <TextField
        id="search-box"
        label="Search"
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        variant="outlined"
        />
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="breaches table">
        <TableHead>
          <TableRow>
            <TableCell onClick={() => updateSortState('Name')}>Name</TableCell>
            <TableCell onClick={() => updateSortState('Domain')} align="right">Domain</TableCell>
            <TableCell onClick={() => updateSortState('BreachDate')} align="right">Breach Date</TableCell>
            <TableCell onClick={() => updateSortState('IsVerified')} align="right">Verified</TableCell>
            <TableCell onClick={() => updateSortState('PwnCount')} align="right">Pwn Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row['Description']}>
                <TableCell>{row['Name']}</TableCell>
                <TableCell align="right">{row['Domain']}</TableCell>
                <TableCell align="right">{row['BreachDate']}</TableCell>
                <TableCell align="right">{`${row['IsVerified']}`}</TableCell>
                <TableCell align="right">{row['PwnCount']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
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

export default BreachesTable
