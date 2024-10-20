import React from "react";
import Skeleton from "@mui/material/Skeleton";

import Stack from "@mui/material/Stack";

export const SkeletonChild = ({
  variant,
  SkeletonsNum,
  sx,
  animation,
  width,
  height,
}) => {
  const skeletonItems = [];

  for (let i = 0; i < SkeletonsNum; i++) {
    skeletonItems.push(
      <Skeleton
        key={i}
        variant={variant}
        animation={animation}
        sx={sx}
        width={width}
        height={height}
      />
    );
  }

  return <>{skeletonItems}</>;
};

export const LgCardSkeleton = () => {
  return (
    <Stack direction="column">
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={565}
        height={350}
        sx={{ mb: 2 }}
      />
      <Skeleton variant="rounded" animation="wave" width={90} height={23} />
      <Skeleton
        variant="rounded"
        width={350}
        animation="wave"
        height={16}
        sx={{ mt: 2 }}
      />
      <Skeleton
        variant="rounded"
        width={565}
        animation="wave"
        height={16}
        sx={{ mt: 4 }}
      />
      <Skeleton
        variant="rounded"
        width={270}
        animation="wave"
        height={16}
        sx={{ mt: 2 }}
      />
      <Stack
        direction="row"
        mt={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="circular" animation="wave" width={40} height={40} />
        <Skeleton variant="rounded" animation="wave" width={120} height={23} />
      </Stack>
    </Stack>
  );
};

export const MdCardSkeleton = () => {
  return (
    <Stack direction="column">
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={370}
        height={350}
        sx={{ mb: 2 }}
      />
      <Skeleton variant="rounded" animation="wave" width={90} height={23} />
      <Skeleton
        variant="rounded"
        width={220}
        animation="wave"
        height={16}
        sx={{ mt: 2 }}
      />
      <Skeleton
        variant="rounded"
        width={370}
        animation="wave"
        height={16}
        sx={{ mt: 4 }}
      />
      <Skeleton
        variant="rounded"
        width={270}
        animation="wave"
        height={16}
        sx={{ mt: 2 }}
      />
      <Stack
        direction="row"
        mt={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="circular" animation="wave" width={40} height={40} />
        <Skeleton variant="rounded" animation="wave" width={120} height={23} />
      </Stack>
    </Stack>
  );
};

export const FooterSkeleton = () => {
  return (
    <>
      <Stack direction="column" mt={3} spacing={2}>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width={160}
            height={16}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={120}
            height={16}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width={160}
            height={16}
          />
          <Skeleton
            variant="rounded"
            animation="wave"
            width={120}
            height={16}
          />
        </Stack>
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Skeleton
            variant="rounded"
            animation="wave"
            width={160}
            height={16}
          />
        </Stack>
      </Stack>
      <Skeleton
        variant="rounded"
        animation="wave"
        width={250}
        height={16}
        sx={{ marginLeft: 55 }}
      />
    </>
  );
};
