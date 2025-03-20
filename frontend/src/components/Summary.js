import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const Summary = ({ summary }) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Summary of Issues</Typography>
        <List>
          {summary.map((issue, index) => (
            <ListItem key={index}>
              <ListItemText primary={issue} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Summary;
