import * as React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function CardPerson({ person }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      maxWidth: 345, // Ancho máximo fijo
      width: "100%", // El Card toma el 100% del ancho del contenedor en pantallas pequeñas
      margin: "auto", // Centra la tarjeta si hay espacio extra
      backgroundColor: "#141517",
    }}>
      <CardMedia
        component="img"
        height="194"
        image={person.imagen}
        alt={person.alt}
      />
      <CardContent>
        <Typography sx={{ color: "#aba7a6" }}>
          {person.name}
        </Typography>
      </CardContent>
      <CardActions sx={{
        color: "#aba7a6",
        display: 'flex', 
        justifyContent: 'flex-end', // Alinea el botón a la derecha
        paddingRight: 2, // Añade un poco de margen a la derecha
      }} disableSpacing>
        <Button size="small" onClick={handleExpandClick} sx={{color: "#aba7a6"}}>
          Leer más
          <ExpandMore

            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{color: "#aba7a6"}} />
          </ExpandMore>
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>
            {person.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
