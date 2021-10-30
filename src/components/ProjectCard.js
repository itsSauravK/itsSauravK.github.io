import {
    Card,
    CardContent,
    Divider,
    Grid,
    Paper,
    Typography,
  } from "@mui/material";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import { styled } from "@mui/material/styles";
  
  function ProjectCard({ project }) {
    const Item = styled(Paper)(({ theme }) => ({
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    }));
  
    return (
      <div id={project.id}>
        <Card
          sx={{
            maxWidth: 345,
            cursor: project.url ? "pointer" : "default",
          }}
          onClick={() =>
            project.url ? window.open(project.url, "__blank") : null
          }
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="#213E40"
              sx={{
                textAlign: "center",
              }}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "10px",
              }}
              gutterBottom
            >
              {project.details}
            </Typography>
            {project.technologies ? (
              <>
                <Divider />
                <div style={{ marginTop: "10px" }}>
                  <Grid container spacing={0.5}>
                    {project.technologies.map((tech, index) => (
                      <Grid item key={index} xs="auto">
                        <Item
                          sx={{
                            textAlign: "center",
                            fontSize: "10px",
                            padding: "4px",
                          }}
                        >
                          {tech}
                        </Item>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </>
            ) : null}
            {project.url ? (
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  textAlign: "right",
                  marginBottom: "-20px",
                  marginRight: "-10px",
                }}
              >
                <GitHubIcon sx={{ textAlign: "right" }} />
              </Typography>
            ) : null}
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default ProjectCard;