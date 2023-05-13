export default interface BreadcrumbProps {
  routes: Array<BreadcrumbLinkProps>;
}

export type BreadcrumbLinkProps = {
  link?: string;
  title: string;
  lastItem?: boolean;
};
