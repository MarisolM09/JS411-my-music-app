import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SoundCard(props) {
  const { title, body } = props;

  const handleChange = (event) => {
    props.setState(event.target.value);
  };

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
          <select value={props.state} onChange={handleChange}>
            <option value={1}>Low</option>
            <option value={2}>Normal</option>
            <option value={3}>High</option>
          </select>
        </div>
      </CardContent>

      <CardActions></CardActions>
    </Card>
  );
}
