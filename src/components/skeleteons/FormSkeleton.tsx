import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FormSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#cfcfcf" highlightColor="#dbdbdb">
      <Skeleton className="min-w-full md:min-w-96 py-6 px-4 rounded-md min-h-[450px]" />
    </SkeletonTheme>
  );
};

export default FormSkeleton;
