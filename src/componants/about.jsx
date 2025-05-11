import { Grid, Typography } from "@mui/material"

export default function About() {
  <Grid className ="d-flex-justify-content-flex-end">
    <Typography variant="h5" >
      About me
    </Typography>
    <Typography
      variant="h9"
      display="inline-block"
      sx={{
        width: "50%",
        whiteSpace: "pre-line",
        wordBreak: "break-word",
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
      consectetur obcaecati magnam doloremque ex autem eum eveniet
      laboriosam minus facere deleniti.
    </Typography>
  </Grid >

}