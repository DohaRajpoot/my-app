import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const categories = ["Engineering", "Science", "Mathematics", "Business"];

const PostOrderForm = () => {
  const [title, setTitle] = useState("Computer Science Assignment");
  const [category, setCategory] = useState("Engineering");
  const [price] = useState(120);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState(35);
  const [attachments, setAttachments] = useState(null);

  const handleFileChange = (event) => {
    setAttachments(event.target.files);
  };

  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        p: 4,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Top Bar */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" fontWeight="bold" color="teal">
          My Balance: $10.75
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="black">
            Hello! My Anna Chovey
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
        Post an Order
      </Typography>

      <Box component="form">
        <Grid container spacing={2}>
          {/* Title */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" color="black">
              Type of Paper: *
            </Typography>
            <Typography variant="caption">Set a title to your order</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={title}
              onFocus={() => setTitle("")}
              onBlur={(e) => e.target.value === "" && setTitle("Computer Science Assignment")}
            />
          </Grid>

          {/* Category */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" color="primary">
              Category: *
            </Typography>
            <Typography variant="caption">Which category is your order in?</Typography>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Price */}
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle2" color="primary">
              Price: *
            </Typography>
            <Typography variant="caption">The budget is automatically adjusted</Typography>
            <Typography variant="h6" fontWeight="bold">
              ${price}
            </Typography>
          </Grid>

          {/* Description */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="primary">
              Description: *
            </Typography>
            <Typography variant="caption">Write description to your order</Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="This assignment is about..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          {/* Deadline */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="primary">
              Deadline: *
            </Typography>
            <Typography variant="caption">Set deadline for your order</Typography>
            <TextField
              fullWidth
              type="date"
              variant="outlined"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Attachments */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="primary">
              Attachments: *
            </Typography>
            <Typography variant="caption">Upload files     

            </Typography>
            <Button
              variant="contained"
              fullWidth
              component="label"
              startIcon={<AttachFileIcon />}
              sx={{width: "200px", bgcolor: "primary.main" }}
            >
              Browse Files
              <input type="file" hidden multiple onChange={handleFileChange} />
            </Button>
          </Grid>

          {/* Number of Pages */}
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2" color="primary">
              No of Pages: *
            </Typography>
            <Typography variant="caption">Specify the number of pages for attachment</Typography>
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              min="1"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "200px", bgcolor: "primary.main" }}
            >
              Post Order
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PostOrderForm;