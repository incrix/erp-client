import { Stack } from "@mui/material";

export default function CustomDuoButtonGroup({ options, onClick, value }) {
    return (
      <Stack direction={"row"} width={"300px"} height={"40px"}>
        <Stack
          backgroundColor={value == options[0] ? "#0080FF" : null}
          justifyContent="center"
          alignItems="center"
          width="100%"
          borderRadius="10px 0 0 10px"
          padding="0 10px"
          border={value == options[0] ? "1px solid #0080FF" : "1px solid #82878C"}
          color={value == options[0] ? "white" : "#A8ABAF"}
          borderRight="0"
          sx={{
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
            cursor: "pointer",
            transition: "all 0.25s ease-out",
            "&:hover":
              value == options[0]
                ? null
                : {
                    border: "1px solid #0080FF",
                    color: "#0080FF",
                    borderRight: "0",
                  },
          }}
          onClick={() => {
            onClick(options[0]);
          }}
        >
          {options[0]}
        </Stack>
        <Stack
          backgroundColor={value == options[1] ? "#0080FF" : null}
          justifyContent="center"
          alignItems="center"
          borderRadius="0 10px 10px 0"
          padding="0 10px"
          width="100%"
          border={value == options[1] ? "1px solid #0080FF" : "1px solid #82878C"}
          color={value == options[1] ? "white" : "#A8ABAF"}
          borderLeft="0"
          sx={{
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
            cursor: "pointer",
            transition: "all 0.25s ease-out",
            "&:hover":
              value == options[1]
                ? null
                : {
                    border: "1px solid #0080FF",
                    color: "#0080FF",
                    borderLeft: "0",
                  },
          }}
          onClick={() => {
            onClick(options[1]);
          }}
        >
          {options[1]}
        </Stack>
      </Stack>
    );
  }