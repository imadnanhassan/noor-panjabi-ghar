import { ComponentType } from "react";

export type IconType = ComponentType<{ className?: string }>;

export interface BaseMenuItem {
  name: string;
  icon: IconType;
}

export interface MenuItemWithHref extends BaseMenuItem {
  href: string;
}

export interface MenuItemWithSubItems extends BaseMenuItem {
  subItems: MenuItemWithHref[];
}

export type SubMenuItem = MenuItemWithHref | MenuItemWithSubItems;

export interface SectionItem {
  section: string;
  icon: IconType;
  items: SubMenuItem[];
}

export type MenuItem = MenuItemWithHref | SectionItem;
