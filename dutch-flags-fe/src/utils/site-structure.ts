export interface SiteStructure {
  navigation: NavigationLink[];
  filter: string[];
}

export interface NavigationLink {
  href: string;
  title: string;
}
