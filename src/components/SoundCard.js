import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SoundCard(props) {
  const { title, body } = props;

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="card-title">
          <Typography variant="body2">{body}</Typography>
        </div>
        <div className="Drop-menu">
          <select>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}
