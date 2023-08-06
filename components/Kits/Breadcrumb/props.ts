export default interface BreadcrumbProps {
  routes: BreadcrumbLinkProps[];
}

export interface BreadcrumbLinkProps {
  link?: string;
  title: string;
  lastItem?: boolean;
}
