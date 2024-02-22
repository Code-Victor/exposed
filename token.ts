import { radius, size, zIndex, color } from "@tamagui/themes";
import { createTokens } from "tamagui";

// 👇use for later upgrades
export const spaceValues = {
  $0: 0,
  "$0.5": 2,
  $1: 4,
  "$1.5": 6,
  $2: 8,
  "$2.5": 10,
  $3: 12,
  "$3.5": 14,
  $4: 16,
  $true: 16,
  "$4.5": 18,
  $5: 20,
  "$5.5": 22,
  $6: 24,
  $7: 28,
  $8: 32,
  $9: 36,
  $10: 40,
};
type SpaceValueKeys = keyof typeof spaceValues;
type SpaceValues = typeof spaceValues;
const spaces = Object.entries(spaceValues).map(([k, v]) => {
  return [k, v] as const;
});

const spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);

type SizeKeysWithNegatives =
  | Exclude<
      `-${SpaceValueKeys extends `$${infer Key}` ? Key : SpaceValueKeys}`,
      "-0"
    >
  | SpaceValueKeys;

export const space: {
  [Key in SizeKeysWithNegatives]: Key extends keyof SpaceValues
    ? SpaceValues[Key]
    : number;
} = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
} as any;

export default createTokens({
  color,
  radius,
  zIndex,
  size,
  space,
});
