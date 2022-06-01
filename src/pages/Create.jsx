import { useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useFirestore } from "../hooks/useFirestore";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Create() {
  const navigate = useNavigate();
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
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const { addDocument: addNote, response } = useFirestore("notes");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title === "") setTitleError(true);
    if (details === "") setDetailsError(true);

    if (title && details) {
      addNote({
        title,
        details,
        category,
      });

      if (response.error) {
        return toast.error("Something went wrong", {
          icon: "😦",
        });
      }

      toast.success("Your note was added", {
        icon: "🚀",
      });

      navigate("/");
      setTitle("");
      setDetails("");
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
          error={titleError}
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
          error={detailsError}
        />

        <FormControl>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <FormControlLabel control={<Radio />} value="todos" label="Todos" />
            <FormControlLabel control={<Radio />} value="money" label="Money" />
            <FormControlLabel
              control={<Radio />}
              value="reminders"
              label="Reminders"
            />
            <FormControlLabel control={<Radio />} value="Work" label="Work" />
          </RadioGroup>
        </FormControl>

        <LoadingButton
          // sx={styles.btn}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightOutlinedIcon />}
          loading={response.isPending}
        >
          Submit
        </LoadingButton>
      </form>
    </Container>
  );
}
