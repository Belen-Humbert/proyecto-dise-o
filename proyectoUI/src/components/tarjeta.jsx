import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Tarjeta({ empresa }) {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia component="img" image={empresa.imagen} alt={empresa.name} />
        <CardContent sx={{ backgroundColor: "#141517"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color: '#aba7a6'}}>
            {empresa.name}
          </Typography>
          <Typography variant="body2" sx={{color: '#aba7a6'}} >
            {empresa.descript}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
