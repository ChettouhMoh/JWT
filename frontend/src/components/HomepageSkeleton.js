import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import {
  FooterSkeleton,
  LgCardSkeleton,
  MdCardSkeleton,
  SkeletonChild,
} from "./Skeleton";

const HomepageSkeleton = () => {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 4,
        gap: 4,
        pb: 4,
      }}
    >
      {/* appBar Skeleton */}
      <Skeleton variant="text" sx={{ fontSize: "3.3rem" }} />

      {/* title Skeleton */}
      <Skeleton variant="rounded" width={180} height={50} sx={{ mt: 6 }} />
      <Skeleton variant="rounded" width={350} height={16} sx={{ mt: -1 }} />
      <Stack direction="row" spacing={2}>
        <SkeletonChild
          variant="rounded"
          SkeletonsNum={4}
          width={90}
          height={23}
          animation="wave"
        />
      </Stack>

      {/* ################################    content Skeleton    ###################################### */}
      <Stack direction="row" spacing={2}>
        <LgCardSkeleton />
        <LgCardSkeleton />
      </Stack>
      {/* second line of skeletons */}
      <Stack direction="row" spacing={2} mt={5}>
        <MdCardSkeleton />
        <MdCardSkeleton />
        <MdCardSkeleton />
      </Stack>

      {/* ################################    Footer Skeleton    ###################################### */}
      <Divider />
      <FooterSkeleton />
    </Container>
  );
};

export default HomepageSkeleton;
