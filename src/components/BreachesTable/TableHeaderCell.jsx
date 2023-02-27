import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
  columnHeaders: {
    cursor: "pointer",
  },
});

function TableHeaderCell({
  name,
  sortState,
  updateSortState,
  displayName,
  align,
}) {
  const classes = useStyles();

  if (sortState.header === name) {
    const arrow = sortState.ascending ? "⬆" : "⬇";
    displayName += " " + arrow;
  }

  return (
    <TableCell
      className={classes.columnHeaders}
      align={align}
      onClick={() => updateSortState(name)}
    >
      {displayName}
    </TableCell>
  );
}

export default TableHeaderCell;
