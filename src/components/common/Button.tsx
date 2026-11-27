import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type Variant = 'pill' | 'rounded' | 'square' | 'outline' | 'nav';

const base =
  'inline-flex items-center justify-center whitespace-nowrap font-sans transition-[background-color,color,transform,box-shadow] duration-200 ease-out focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  // radius 300px, 50px tall, 19.6px text — e.g. "Free Assessment", "See more"
  pill: 'h-[50px] rounded-[300px] border-2 border-ink bg-ink px-[36px] text-[19.6px] leading-5 text-white hover:-translate-y-0.5 hover:bg-[#262626] active:translate-y-0',
  // radius 20px, 46px tall — e.g. "View All", "Our Healthcare Team"
  rounded: 'h-[46px] rounded-[20px] border-2 border-ink bg-ink px-[36px] text-[19.6px] leading-5 text-white hover:-translate-y-0.5 hover:bg-[#262626] active:translate-y-0',
  // radius 11px, 46px tall — e.g. "Join Now"
  square: 'h-[46px] rounded-[11px] border-2 border-ink bg-ink px-[24px] text-[19.6px] leading-5 text-white hover:-translate-y-0.5 hover:bg-[#262626] active:translate-y-0',
  // 1px outline, 14px — e.g. "Learn More"
  outline: 'h-[42px] w-[174px] rounded-[20px] border border-ink bg-transparent text-[14px] leading-5 text-ink hover:bg-ink hover:text-white',
  // navbar "Log in" style CTA
  nav: 'h-[43px] rounded-[300px] bg-ink px-[31px] text-[16px] leading-5 text-white hover:bg-[#262626]',
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & { to: string; href?: never } & Omit<ComponentPropsWithoutRef<typeof Link>, 'to' | 'className' | 'children'>;
type ButtonAsAnchor = CommonProps & { href: string; to?: never } & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;
type ButtonAsButton = CommonProps & { to?: never; href?: never } & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

export type ButtonProps = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = 'pill', className, children } = props;
  const cls = cn(base, variants[variant], className);

  if ('to' in props && props.to !== undefined) {
    const { to, variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsLink;
    void _v; void _c; void _ch;
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if ('href' in props && props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, ...rest } = props as ButtonAsAnchor;
    void _v; void _c; void _ch;
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  const { variant: _v, className: _c, children: _ch, type = 'button', ...rest } = props as ButtonAsButton;
  void _v; void _c; void _ch;
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
