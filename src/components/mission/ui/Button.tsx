import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

// Setting up shared BaseProps that will be used no matter if a <button> or <Link> should be rendered
type BaseProps = {
  textOnly?: boolean;
  children: ReactNode;
};

// Setting up Button / Link specific props
// The `to` prop will be used to determine if a <button> or <Link> should be rendered
type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & {
    to?: never;
  };

type ButtonLinkProps = LinkProps & BaseProps & { to: string };

type Props = ButtonProps | ButtonLinkProps;

function isRouterLink(props: Props): props is ButtonLinkProps {
  return "to" in props;
}

function Button(props: Props) {
  if (isRouterLink(props)) {
    // Destructuring inside the `if` statement to ensure TypeScript "understands" that `props` is of type `ButtonLinkProps` and `otherProps` will therefore only contain props that work on <Link>
    const { children, textOnly, ...rest } = props;
    return (
      <Link className={`button button--${textOnly && "text-only"}`} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...rest } = props;
  return (
    <button className={`button button--${textOnly && "text-only"}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
