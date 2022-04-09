import Svg, { Path } from "react-native-svg";

export const svgIcons = {
  check: () => (
    <Svg width={18} height={12}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.218.304a1 1 0 0 1-.022 1.414l-10.312 10a1 1 0 0 1-1.393 0L.804 7.172a1 1 0 0 1 1.392-1.435l3.991 3.87L15.805.282a1 1 0 0 1 1.414.022Z"
        fill="#fff"
      />
    </Svg>
  ),
  closeX: () => (
    <Svg width={8} height={8}>
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.425 1.639A.752.752 0 0 0 6.36.575L4 2.936 1.639.576A.752.752 0 1 0 .575 1.638L2.936 4 .576 6.361a.752.752 0 1 0 1.063 1.064L4 5.064l2.361 2.36a.752.752 0 1 0 1.064-1.063L5.064 4l2.36-2.361Z"
        fill="#022B54"
      />
    </Svg>
  ),
  search: () => (
    <Svg width={22} height={22}>
      <Path
        opacity={0.4}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.051 10.001a6.95 6.95 0 1 1 11.95 4.827 1.045 1.045 0 0 0-.176.176 6.95 6.95 0 0 1-11.774-5.003Zm12.562 7.1a9.05 9.05 0 1 1 1.485-1.485l3.645 3.645a1.05 1.05 0 1 1-1.485 1.485l-3.645-3.645Z"
        fill="#022B54"
      />
    </Svg>
  ),
  chevronDown: () => (
    <Svg width={10} height={5}>
      <Path
        opacity={0.3}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.491 8.403.183a.656.656 0 0 1 .909 0 .613.613 0 0 1 0 .884l-3.857 3.75a.656.656 0 0 1-.91 0L.688 1.067a.613.613 0 0 1 0-.884.656.656 0 0 1 .91 0L5 3.491Z"
        fill="#022B54"
      />
    </Svg>
  ),
};

export type SvgIcons = keyof typeof svgIcons;
