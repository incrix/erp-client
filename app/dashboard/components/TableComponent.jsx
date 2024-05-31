"use client";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SmoothCorners } from "react-smooth-corners";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#97A1B1",
    fontWeight: "600",
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderColor: "#F6F6F6",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "transparent",
  border: 0,
}));

const HeadStyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  "--smooth-corners": 30,
  maskImage: "paint(smooth - corners)",
  "-webkit-mask-image": "paint(smooth-corners)",
  "td, th": {
    border: 0,
    ":first-child": {
      borderTopLeftRadius: "10px",
      borderBottomLeftRadius: "10px",
    },
    ":last-child": {
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
    },
  },
}));

export default function TableComponent({
  rows,
  headList,
  height,
  currentPage,
  rowPerPage,
}) {
  const rowsPerPage = rows.slice(
    (currentPage - 1) * rowPerPage,
    currentPage * rowPerPage
  );
  return (
    <TableContainer
      sx={{
        height,
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#F8F8F8",
          borderRadius: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(151, 161, 177, 0.5)",
          borderRadius: "5px",
          "&:hover": {
            background: "rgb(151, 161, 177)",
          },
        },
      }}
    >
      <SmoothCorners style={{ display: "none" }} />
      <Table dense table size="small">
        <TableHead
          sx={{
            height: "55px",
            position: "sticky",
            top: "0",
            zIndex: 1,
          }}
        >
          <HeadStyledTableRow>
            {headList.map((item) => (
              <StyledTableCell key={item.key}>{item.title}</StyledTableCell>
            ))}
          </HeadStyledTableRow>
        </TableHead>
        <TableBody>
          {rowsPerPage.map((row) => {
            console.log(row);
            return (
              <StyledTableRow
                key={row.id}
                sx={{
                  height: "30px !important",
                }}
              >
                {headList.map((item, index) => {
                  if (index === 0)
                    return (
                      <StyledTableCell component={"th"} scope="row">
                        {row[item.key]}
                      </StyledTableCell>
                    );
                  if (item.type == "action") {
                    const ActionComp = item.actionComp;
                    // const value = row[item.key];
                    return (
                      <StyledTableCell>
                        <ActionComp id={row.id} row={row} />
                      </StyledTableCell>
                    );
                  }
                  return <StyledTableCell>{row[item.key]}</StyledTableCell>;
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
