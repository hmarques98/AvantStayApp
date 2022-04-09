import * as React from "react";

import { SvgIcons, svgIcons } from "./SvgIcons";

type IconProps = {
  icon: SvgIcons;
  color?: string;
};

const Icon = (props: IconProps) => svgIcons[props.icon](props);

export default Icon;
