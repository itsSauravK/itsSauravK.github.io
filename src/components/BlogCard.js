import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const monthMap = new Map([
  [1, "Jan"],
  [2, "Feb"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "Aug"],
  [9, "Sept"],
  [10, "Oct"],
  [11, "Nov"],
  [12, "Dec"],
]);

const formatDate = (rawDate) => {
  const [year, month, day] = rawDate.split(" ")[0].split("-");
  return day + " " + monthMap.get(parseInt(month)) + " " + year;
};

function BlogCard({ blog }) {
  return (
    <div id={blog.publishedDate.replace(/\s/g, "")}>
      <Card
        sx={{
          maxWidth: 345,
        }}
        onClick={() => window.open(blog.url, "__blank")}
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#213E40"
              sx={{
                textAlign: "center",
                textOverflow: "ellipsis",
                maxHeight: 30,
                maxWidth: "inherit",
                overflow: "hidden",
                display: "block",
              }}
            >
              {blog.title}
            </Typography>
            <CardMedia component="img" height="140" image={blog.thumbnail} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "10px",
                maxHeight: "120px",
                textOverflow: "ellipsis",
                maxWidth: "inherit",
                overflow: "hidden",
                display: "block",
              }}
              gutterBottom
            >
              {blog.description}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ textAlign: "right", textOverflow: "ellipsis" }}
            >
              {formatDate(blog.publishedDate)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default BlogCard;
