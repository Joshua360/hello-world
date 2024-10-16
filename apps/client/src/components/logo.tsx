import { useTheme } from "@reactive-resume/hooks";
import { cn } from "@reactive-resume/utils";

type Props = {
  size?: number;
  className?: string;
};

export const Logo = ({ size = 32, className }: Props) => {
  const { isDarkMode } = useTheme();

  let src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  switch (isDarkMode) {
    case false: {
      src = "/logo/img/light.png";
      break;
    }
    case true: {
      src = "/logo/img/dark.png";
      break;
    }
  }

  return (
    <img
      src={src}
      style={{ width: "100px" }}
      // width={size}
      // height={size}
      alt="Instant Resume"
      className={cn("rounded-sm", className)}
    />
  );
};
