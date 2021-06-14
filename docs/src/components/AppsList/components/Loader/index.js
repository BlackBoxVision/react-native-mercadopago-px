import React from "react";
import ContentLoader from "react-content-loader";

import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

const Loader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <ContentLoader
      speed={2}
      height={250}
      width={width}
      viewBox={`0 0 ${width} 250`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="200" y="50" rx="15" width="300" height="200" />
      {width > 860 && <rect x="600" y="50" rx="15" width="300" height="200" />}
      {width > 1200 && (
        <rect x="1000" y="50" rx="15" width="300" height="200" />
      )}
    </ContentLoader>
  );
};

Loader.displayName = "Loader";

export default Loader;
