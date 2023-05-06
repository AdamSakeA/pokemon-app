import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container } from "./detailEffect.styles";

export default function DetailEffectSkeleton() {
  return (
    <SkeletonTheme baseColor="#151515" highlightColor="#444">
      <Container>
        <h1>
          <Skeleton />
        </h1>
        <p>
          <Skeleton />
        </p>
      </Container>
    </SkeletonTheme>
  );
}
