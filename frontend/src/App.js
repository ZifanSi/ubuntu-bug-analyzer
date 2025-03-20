import React, { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const ubuntuVersions = {
  "20.04": {
    name: "Ubuntu 20.04 LTS",
    releaseDate: "April 23, 2020",
    kernel: "Linux 5.4",
    desktop: "GNOME 3.36",
    support: "Until April 2025",
    features: ["F01 - Improved ZFS Support", "F02 - Better Performance", "F03 - New GNOME Shell Enhancements"],
  },
  "20.04.1": {
    name: "Ubuntu 20.04.1 LTS",
    releaseDate: "August 6, 2020",
    kernel: "Linux 5.4",
    desktop: "GNOME 3.36",
    support: "Until April 2025",
    features: ["F01 - Security Updates", "F02 - Kernel Stability", "F03 - UI Improvements"],
  },
  "20.04.2": {
    name: "Ubuntu 20.04.2 LTS",
    releaseDate: "February 11, 2021",
    kernel: "Linux 5.8",
    desktop: "GNOME 3.36",
    support: "Until April 2025",
    features: ["F01 - Kernel Update to 5.8", "F02 - Improved Hardware Support", "F03 - Performance Fixes"],
  },
  "20.04.3": {
    name: "Ubuntu 20.04.3 LTS",
    releaseDate: "August 26, 2021",
    kernel: "Linux 5.11",
    desktop: "GNOME 3.36",
    support: "Until April 2025",
    features: ["F01 - Kernel Update to 5.11", "F02 - More Security Fixes", "F03 - Improved Drivers"],
  },
  "20.04.4": {
    name: "Ubuntu 20.04.4 LTS",
    releaseDate: "February 24, 2022",
    kernel: "Linux 5.13",
    desktop: "GNOME 3.36",
    support: "Until April 2025",
    features: ["F01 - Kernel Update to 5.13", "F02 - Performance Enhancements", "F03 - UI Refinements"],
  },
};

const UbuntuVersionSelector = () => {
  const [selectedVersion, setSelectedVersion] = useState("20.04");
  const [open, setOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleChange = (event) => {
    setSelectedVersion(event.target.value);
  };

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Select Ubuntu Version
      </Typography>
      <Select value={selectedVersion} onChange={handleChange} fullWidth variant="outlined">
        {Object.keys(ubuntuVersions).map((version) => (
          <MenuItem key={version} value={version}>
            {version}
          </MenuItem>
        ))}
      </Select>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">{ubuntuVersions[selectedVersion].name}</Typography>
          <Typography>📅 Release Date: {ubuntuVersions[selectedVersion].releaseDate}</Typography>
          <Typography>🖥 Kernel: {ubuntuVersions[selectedVersion].kernel}</Typography>
          <Typography>🖥 Desktop: {ubuntuVersions[selectedVersion].desktop}</Typography>
          <Typography>🔧 Support Until: {ubuntuVersions[selectedVersion].support}</Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Features:
          </Typography>
          <List>
            {ubuntuVersions[selectedVersion].features.map((feature, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => handleFeatureClick(feature)}>
                  {feature}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Feature Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feature Details</DialogTitle>
        <DialogContent>
          <Typography>{selectedFeature}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UbuntuVersionSelector;
