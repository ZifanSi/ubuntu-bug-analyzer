import React from "react";
import { Select, MenuItem, Typography } from "@mui/material";

const VersionSelector = ({ versions, baseVersion, targetVersion, setBaseVersion, setTargetVersion }) => {
  return (
    <>
      <Typography variant="subtitle1">Select Base Version:</Typography>
      <Select
        value={baseVersion}
        onChange={(event) => {
          setBaseVersion(event.target.value);
          if (versions.indexOf(event.target.value) >= versions.indexOf(targetVersion)) {
            setTargetVersion(versions[versions.indexOf(event.target.value) + 1] || versions[versions.length - 1]);
          }
        }}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      >
        {versions.map((version) => (
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
        {versions.filter((version) => version > baseVersion).map((version) => (
          <MenuItem key={version} value={version}>
            {version}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default VersionSelector;
