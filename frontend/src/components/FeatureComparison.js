import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Chip, Stack } from "@mui/material";

const FeatureComparison = ({ lostFeatures, unchangedFeatures, newFeatures, baseVersion, targetVersion }) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">
          Comparing {baseVersion} → {targetVersion}
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>Features That Stopped Working:</Typography>
        {lostFeatures.length > 0 ? (
          <List>
            {lostFeatures.map((feature, index) => (
              <ListItem key={index}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ListItemText primary={feature} />
                  <Chip label="Not Working" color="error" />
                </Stack>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No features lost.</Typography>
        )}

        <Typography variant="subtitle1" sx={{ mt: 2 }}>Features That Remained Working:</Typography>
        {unchangedFeatures.length > 0 ? (
          <List>
            {unchangedFeatures.map((feature, index) => (
              <ListItem key={index}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ListItemText primary={feature} />
                  <Chip label="Still Working" color="success" />
                </Stack>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No unchanged features.</Typography>
        )}

        <Typography variant="subtitle1" sx={{ mt: 2 }}>New Features Introduced:</Typography>
        {newFeatures.length > 0 ? (
          <List>
            {newFeatures.map((feature, index) => (
              <ListItem key={index}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ListItemText primary={feature} />
                  <Chip label="New Feature" color="primary" />
                </Stack>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No new features added.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureComparison;
