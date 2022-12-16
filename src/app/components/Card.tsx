import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
import { results } from "../../features/Home/homeSlice";

const CardComponent: React.FC<results> = (props: results) => {
  const navigate = useNavigate();

  const handleClick = (cardId: number, cardname: string) => {
    navigate(
      `/profile/${cardId}-${cardname.toLowerCase().split(" ").join("-")}`
    );
  };
  const { id, name, image, status } = props;
  return (
    <Card
      onClick={() => handleClick(id, name)}
      sx={{ minHeight: 210, minWidth: 200, m: 2 }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status :{" "}
            <Badge
              sx={{ mx: 4 }}
              badgeContent={status}
              color={
                status === "Alive"
                  ? "success"
                  : status === "Dead"
                  ? "error"
                  : "info"
              }
            ></Badge>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
