import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios"; // import axios library

const columns = [
  {
    field: "name",
    headerName: "عنوان",
    width: 230,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "email",
    headerName: "توضیح کوتاه ",
    width: 230,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "تاریخ",
    type: "number",
    width: 190,
    headerAlign: "center",
    align: "center",
  },
];

export default function DataTable() {
  const [filterText, setFilterText] = useState("");
  const [rows, setRows] = useState([]); // State to store the fetched rows

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users") // Replace with your API endpoint
      .then((response) => {
        setRows(response.data);
        console.log(response.data); // Update the rows state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      (row.firstName &&
        row.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (row.lastName &&
        row.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (row.date && row.date.includes(filterText))
  );

  const rowClass = {
    root: {
      border: "1px solid white",
    },
  };
  const getRowSpacing = React.useCallback((params) => {
    return {
      top: params.isFirstVisible ? 0 : 10, // Set top spacing, no spacing for the first visible row
      bottom: 10, // Set bottom spacing for all rows
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#0D929A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        direction: "rtl",
        height: "100vh",
      }}>
      <div
        style={{ width: "60%", display: "flex", gap: "10px", color: "white" }}>
        <p>پیش فرض</p>
        <p> دسته بندی</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: 800,
          marginBottom: "1rem",
          color: "white",
          direction: "ltr",
        }}>
        <TextField
          style={{ color: "white", borderColor: "white" }}
          placeholder="جستجو"
          variant="outlined"
          value={filterText}
          onChange={handleFilterChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div style={{ height: 400, width: "60%", padding: "10px", gap: 20 }}>
        <DataGrid
          getRowSpacing={getRowSpacing}
          style={{
            backgroundColor: "#273c751c", // Change the background color
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px",
            color: "white",
          }}
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          autoHeight
          rowClassName={rowClass}
          rowHeight={40} // Set the height of each row
        />
      </div>
    </div>
  );
}
