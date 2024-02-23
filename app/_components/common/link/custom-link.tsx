import { Link as MuiLink, SxProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

type TProps = {
  href: string;
  children?: ReactNode;
  sx?: SxProps;
  underline?: "none" | "hover";
};

export const CustomLink: React.FC<TProps> = ({
  href,
  children,
  sx,
  underline,
}) => {
  return (
    <Link href={href} legacyBehavior>
      <MuiLink underline={underline} sx={{ cursor: "pointer", ...sx }}>
        {children}
      </MuiLink>
    </Link>
  );
};
