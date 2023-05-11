import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Title } from "./detailAbility.styles";

export default function DetailAbilitySkeleton() {
  return (
    <div data-testid="detail-ability-skeleton">
      <SkeletonTheme baseColor="#151515" highlightColor="#444">
        <Title>
          <Skeleton />
        </Title>
        <p>
          <Skeleton />
        </p>
        <p>
          <Skeleton />
        </p>
      </SkeletonTheme>
    </div>
  );
}
