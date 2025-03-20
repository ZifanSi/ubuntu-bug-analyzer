import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
} from "@mui/material";

const ubuntuVersions = {
  "20.04": {
    name: "Ubuntu 20.04 LTS",
    releaseDate: "April 23, 2020",
    features: [
      { name: "F01 - Improved ZFS Support", status: "Working" },
      { name: "F02 - Better Performance", status: "Working" },
      { name: "F03 - New GNOME Shell Enhancements", status: "Working" },
    ],
  },
  "20.04.1": {
    name: "Ubuntu 20.04.1 LTS",
    releaseDate: "August 6, 2020",
    features: [
      { name: "F01 - Improved ZFS Support", status: "Working" },
      { name: "F02 - Better Performance", status: "Not Working" },
      { name: "F03 - New GNOME Shell Enhancements", status: "Working" },
      { name: "F04 - Security Updates", status: "Working" }, // New Feature
    ],
  },
  "20.04.2": {
    name: "Ubuntu 20.04.2 LTS",
    releaseDate: "February 11, 2021",
    features: [
      { name: "F01 - Improved ZFS Support", status: "Working" },
      { name: "F02 - Better Performance", status: "Not Working" },
      { name: "F03 - New GNOME Shell Enhancements", status: "Not Working" },
      { name: "F04 - Security Updates", status: "Working" },
      { name: "F05 - Kernel Update to 5.8", status: "Working" }, // New Feature
    ],
  },
};

const UbuntuFeatureTracker = () => {
  const versionKeys = Object.keys(ubuntuVersions);
  const [baseVersion, setBaseVersion] = useState(versionKeys[0]);
  const [targetVersion, setTargetVersion] = useState(versionKeys[1]);
  const [lostFeatures, setLostFeatures] = useState([]);
  const [newFeatures, setNewFeatures] = useState([]);
  const [unchangedFeatures, setUnchangedFeatures] = useState([]);

  useEffect(() => {
    compareFeatures(baseVersion, targetVersion);
  }, [baseVersion, targetVersion]);

  const compareFeatures = (base, target) => {
    const baseFeatures = ubuntuVersions[base]?.features || [];
    const targetFeatures = ubuntuVersions[target]?.features || [];

    const lost = baseFeatures
      .filter(
        (feature) =>
          feature.status === "Working" &&
          targetFeatures.some((f) => f.name === feature.name && f.status === "Not Working")
      )
      .map((feature) => feature.name);

    const newF = targetFeatures
      .filter((feature) => !baseFeatures.some((f) => f.name === feature.name))
      .map((feature) => feature.name);

    const unchanged = baseFeatures
      .filter(
        (feature) =>
          feature.status === "Working" &&
          targetFeatures.some((f) => f.name === feature.name && f.status === "Working")
      )
      .map((feature) => feature.name);

    setLostFeatures(lost);
    setNewFeatures(newF);
    setUnchangedFeatures(unchanged);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Ubuntu Feature Tracker
      </Typography>

      <Typography variant="subtitle1">Select Base Version:</Typography>
      <Select
        value={baseVersion}
        onChange={(event) => {
          setBaseVersion(event.target.value);
          if (versionKeys.indexOf(event.target.value) >= versionKeys.indexOf(targetVersion)) {
            setTargetVersion(versionKeys[versionKeys.indexOf(event.target.value) + 1] || versionKeys[versionKeys.length - 1]);
          }
        }}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      >
        {versionKeys.map((version) => (
          <MenuItem key={version} value={version}>
            {version}
          </MenuItem>
        ))}
      </Select>

      <Typography variant="subtitle1">Select Target Version:</Typography>
      <Select
        value={targetVersion}
        onChange={(event) => setTargetVersion(event.target.value)}
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      >
        {versionKeys
          .filter((version) => version > baseVersion)
          .map((version) => (
            <MenuItem key={version} value={version}>
              {version}
            </MenuItem>
          ))}
      </Select>

      <Card sx={{ mt: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Comparing {ubuntuVersions[baseVersion].name} → {ubuntuVersions[targetVersion].name}
          </Typography>

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Features That Stopped Working:
          </Typography>
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

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Features That Remained Working:
          </Typography>
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

          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            New Features Introduced:
          </Typography>
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
    </Container>
  );
};

export default UbuntuFeatureTracker;
