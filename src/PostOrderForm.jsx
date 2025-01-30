import { useState } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const categories = ["Engineering", "Science", "Mathematics", "Business"];
const paperTypes = ["Research Paper", "Resume Writing", "Essay", "Term Paper", "Thesis", "Dissertation", "Other"];
const academicLevels = ["High School", "Inter Level", "Bachelor's", "Master's", "Ph.D."];

const PostOrderForm = () => {
  const [title, setTitle] = useState("Computer Science Assignment");
  const [category, setCategory] = useState("Engineering");
  const [paperType, setPaperType] = useState("Research Paper");
  const [academicLevel, setAcademicLevel] = useState("High School");
  const [price] = useState(120);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pages, setPages] = useState(35);
  const [attachments, setAttachments] = useState(null);

  const handleFileChange = (event) => {
    setAttachments(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      title,
      category,
      paperType,
      academicLevel,
      price,
      description,
      deadline,
      pages,
      attachments: attachments ? Array.from(attachments).map(f => f.name) : null,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "900px",
        mx: "auto",
        p: 4,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" fontWeight="bold" color="teal">
          My Balance: $10.75
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" fontWeight="bold" color="black">
            Hello! Anna Chovey
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="h5" fontWeight="bold" align="center" mb={3}>
        Post an Order
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Type of Paper: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Select the type of paper</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="paper-type-label">Paper Type</InputLabel>
            <Select
              labelId="paper-type-label"
              id="paper-type"
              value={paperType}
              label="Paper Type"
              onChange={(e) => setPaperType(e.target.value)}
            >
              {paperTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Field of Study: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Which category is your order in?</Typography>
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

        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Academic Level: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Select academic level</Typography>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="academic-level-label">Academic Level</InputLabel>
            <Select
              labelId="academic-level-label"
              id="academic-level"
              value={academicLevel}
              label="Academic Level"
              onChange={(e) => setAcademicLevel(e.target.value)}
            >
              {academicLevels.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Price: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">The budget is automatically adjusted</Typography>
          <Typography variant="h6" fontWeight="bold">
            ${price}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Description: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Write description to your order</Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="This assignment is about..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Deadline: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Set deadline for your order</Typography>
          <TextField
            fullWidth
            type="date"
            variant="outlined"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            Attachments: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Upload files: </Typography>
          <Box sx={{ mt: 1 }}>  
            <Button
              variant="contained"
              fullWidth 
              component="label"
              startIcon={<AttachFileIcon />}
              sx={{ width: "200px", height:"45px" ,bgcolor: "primary.main", color: "white" }}
            >
            Browse Files
            <input type="file" hidden multiple onChange={handleFileChange} />
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2" color="black" fontWeight="bold">
            No of Pages: <span style={{ color: "red" }}>*</span>
          </Typography>
          <Typography variant="caption" color="gray">Specify the number of pages for attachment</Typography>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            min="1"
          />
        </Grid>

        <Grid item xs={12} sm={6} display="flex" alignItems="center" justifyContent="flex-end"> {/* Post Order Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "200px",height:"52px", bgcolor: "primary.main", color: "white", fontWeight: "bold", mt:6 }}
          >
           Post Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostOrderForm;