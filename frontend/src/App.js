import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ubuntuVersions from "./data/ubuntuVersions";
import VersionSelector from "./components/VersionSelector";
import FeatureComparison from "./components/FeatureComparison";
import Summary from "./components/Summary";

const App = () => {
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

    const unchanged = baseFeatures
      .filter(
        (feature) =>
          feature.status === "Working" &&
          targetFeatures.some((f) => f.name === feature.name && f.status === "Working")
      )
      .map((feature) => feature.name);

    const newF = targetFeatures
      .filter((feature) => !baseFeatures.some((f) => f.name === feature.name))
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
      <VersionSelector
        versions={versionKeys}
        baseVersion={baseVersion}
        targetVersion={targetVersion}
        setBaseVersion={setBaseVersion}
        setTargetVersion={setTargetVersion}
      />
      <FeatureComparison
        lostFeatures={lostFeatures}
        unchangedFeatures={unchangedFeatures}
        newFeatures={newFeatures}
        baseVersion={baseVersion}
        targetVersion={targetVersion}
      />
      <Summary summary={ubuntuVersions[targetVersion].summary} />
    </Container>
  );
};

export default App;
