import * as React from "react";

import { SvgIcons, svgIcons } from "./SvgIcons";

type IconProps = {
  icon: SvgIcons;
};

const Icon = (props: IconProps) => svgIcons[props.icon]();

export default Icon;
