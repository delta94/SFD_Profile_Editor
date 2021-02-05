// this file is auto generated. Do not touch.
import { PaletteName } from "./palettes";

export type Item = {
  id: ItemID;
  gameName: string;
  fileName: ItemID;
  equipmentLayer: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  jacketUnderBelt: boolean;
  canEquip: boolean;
  canScript: boolean;
  colorPalette: PaletteName;
  data: number[][];
  gender: 0 | 1 | 2;
};

export type Gender = 0 | 1 | 2;

export const gender = {
  male: 0,
  female: 1,
  both: 2,
} as const;

export const nullItem: Item = {
  gameName: "None",
  fileName: "None" as any,
  equipmentLayer: 0,
  id: "None" as any,
  jacketUnderBelt: false,
  canEquip: false,
  canScript: false,
  colorPalette: "Clothing1",
  data: [[], [], [], [], [], []],
  gender: gender.both,
};

// @ts-ignore: nullItem is added right below
export const items: Record<ItemID, Item> = __ITEMS__;

items[nullItem.id] = nullItem;

export type ItemID = __ITEM_ID__ | "None";
