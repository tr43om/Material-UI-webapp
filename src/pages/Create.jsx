import { useState } from "react";
import { Typography, Button, Container, TextField } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export default function Create() {
  const styles = {
    btn: {
      fontSize: "60px",
      backgroundColor: "red",
      "&:hover": {
        backgroundColor: "blue",
      },
    },

    field: {
      marginTop: "2rem",
      marginBottom: "2rem",
      display: "block",
    },
  };

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          sx={styles.field}
          label="Note title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          sx={styles.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          minRows={2}
          maxRows={5}
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <Button
          // sx={styles.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
