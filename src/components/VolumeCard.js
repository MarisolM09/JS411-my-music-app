import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function VolumeCard(props) {
  const { title, body } = props;
  const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 10,
      label: "10"
    },
    {
      value: 20,
      label: "20"
    },
    {
      value: 30,
      label: "30"
    },
    {
      value: 40,
      label: "40"
    },
    {
      value: 50,
      label: "50"
    },
    {
      value: 60,
      label: "60"
    },
    {
      value: 70,
      label: "70"
    },
    {
      value: 80,
      label: "80"
    },
    {
      value: 90,
      label: "90"
    },
    {
      value: 100,
      label: "100"
    }
  ];
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="card-title">
          <Typography variant="body2">{body}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Slider
          defaultValue={0}
          min={0}
          max={100}
          step={10}
          marks={marks}
          onChange={() => props.setState(!props.state)}
        />
      </CardActions>
    </Card>
  );
}
