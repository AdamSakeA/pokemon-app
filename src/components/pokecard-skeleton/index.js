import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container, SkeletonContents } from "./pokecardSkeleton.styles";

const PokeCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#151515" highlightColor="#444">
      <Container>
        <Skeleton circle width={200} height={200} />
        <Skeleton width={210} height={30} />
        <SkeletonContents>
          <Skeleton width={90} height={30} />
          <Skeleton width={90} height={30} />
        </SkeletonContents>
      </Container>
    </SkeletonTheme>
  );
};

export default PokeCardSkeleton;
