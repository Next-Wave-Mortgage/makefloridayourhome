// Browser shim for next/link used by design-sync previews and the Claude
// Design runtime, where the Next.js router does not exist. Renders a plain
// anchor with the same href/children contract.
import * as React from "react";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
};

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, prefetch, replace, scroll, shallow, children, ...rest },
  ref,
) {
  return (
    <a ref={ref} href={typeof href === "string" ? href : String(href)} {...rest}>
      {children}
    </a>
  );
});

export default Link;
