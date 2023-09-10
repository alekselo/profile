export type iconsName = "logo" | "github" | "telegram" | "telegram1";

export type Props = {
  name: iconsName;
  color?: string;
  size?: number;
  className?: string;
};

interface IconMap {
  [key: string]: string;
}

export const iconsMap: IconMap = {
  logo: "logo",
  github: "github",
  telegram: "telegram",
  telegram1: "telegram1",

};
