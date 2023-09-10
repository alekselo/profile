import { Props } from "./Icons.types";
import { IconsSet } from "./iconsSet/IconsSet";

export const Icons = ({ name, size }: Props) => {
  const IconComponent = IconsSet[name];
  if (!IconComponent) {
    return null;
  }

  const iconStyle = {
    width: size,
    height: size,
    display: "block",
  };

  return <IconComponent style={iconStyle} aria-label={name} />;
};
