import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

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
        <Skeleton variant="rounded" width={90} height={23} />
        <Skeleton variant="rounded" width={90} height={23} />
        <Skeleton variant="rounded" width={90} height={23} />
        <Skeleton variant="rounded" width={90} height={23} />
      </Stack>

      {/* ################################    content Skeleton    ###################################### */}

      <Stack direction="row" spacing={2}>
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
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={23}
            />
          </Stack>
        </Stack>
        <Stack direction="column">
          <Skeleton
            variant="rectangular"
            width={565}
            height={350}
            sx={{ mb: 2 }}
            animation="wave"
          />
          <Skeleton variant="rounded" animation="wave" width={90} height={23} />
          <Skeleton
            variant="rounded"
            width={350}
            height={16}
            animation="wave"
            sx={{ mt: 2 }}
          />
          <Skeleton
            variant="rounded"
            width={565}
            height={16}
            animation="wave"
            sx={{ mt: 4 }}
          />
          <Skeleton
            variant="rounded"
            width={270}
            height={16}
            animation="wave"
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
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={23}
            />
          </Stack>
        </Stack>
      </Stack>
      {/* second line of skeletons */}
      <Stack direction="row" spacing={2} mt={5}>
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
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={23}
            />
          </Stack>
        </Stack>
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
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={23}
            />
          </Stack>
        </Stack>
        <Stack direction="column">
          <Skeleton
            variant="rectangular"
            width={370}
            height={350}
            sx={{ mb: 2 }}
            animation="wave"
          />
          <Skeleton variant="rounded" animation="wave" width={90} height={23} />
          <Skeleton
            variant="rounded"
            width={220}
            height={16}
            animation="wave"
            sx={{ mt: 2 }}
          />
          <Skeleton
            variant="rounded"
            width={370}
            height={16}
            animation="wave"
            sx={{ mt: 4 }}
          />
          <Skeleton
            variant="rounded"
            width={270}
            height={16}
            animation="wave"
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
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
            <Skeleton
              variant="rounded"
              animation="wave"
              width={120}
              height={23}
            />
          </Stack>
        </Stack>
      </Stack>
      {/* ################################    Footer Skeleton    ###################################### */}
      <Divider />

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
    </Container>
  );
};

export default HomepageSkeleton;
