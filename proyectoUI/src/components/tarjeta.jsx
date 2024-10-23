import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function Tarjeta({ empresa }) {
  return (
    <Card sx={{ width: 310, height: 340, flexDirection: 'column', transition: "transform 0.3s ease-in-out",
    "&:hover": { transform: "scale(1.05)" }, }}>
      <CardActionArea >
        <CardMedia
          component="img"
          image={empresa.imagen}
          alt={empresa.name}
          sx={{ height: 250, objectFit: 'cover' }}
        />
        <CardContent sx={{ 
          backgroundColor: "#141517", 
          height: 300
        }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#aba7a6"}}
          >
            {empresa.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
