import { Container, Grid } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { blogs } from "../constants/blogs";

function Blogs() {
    return (
        <div className="container-wrapper">
            <Container>
                <Grid container spacing={3}>
                    {
                        blogs.map((blog) => (
                            <Grid item key={blog.id} xs={12} md={6} lg={4}>
                                <BlogCard blog={blog}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Blogs;