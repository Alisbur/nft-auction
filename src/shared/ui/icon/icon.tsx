import type { CSSProperties } from "react";

import { type IconName, icons } from "./icons";

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon = ({ name, size, color, className }: IconProps) => {
  const Svg = icons[name];

  const style: CSSProperties = {
    ...(size !== undefined && { width: size }),
    color,
  };

  return <Svg className={className} style={style} />;
};
