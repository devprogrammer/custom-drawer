import { twMerge } from 'tailwind-merge';

type ITypography = {
  as?: 'p' | 'h2' | 'h3' | 'h5' | 'span';
  align?: string;
  size?: number;
  weight?: string | number;
  color?: number | string;
  cursor?: string;
  children: any;
  margin?: any;
  spacing?: any;
  className?: string;
  [x: string]: any;
};

export const Typography: React.FC<ITypography> = ({
  as = 'span',
  align = 'text-left',
  size = 14,
  weight = 400,
  color = 'black',
  cursor = '',
  margin = 'm-0',
  spacing = 'tracking-normal',
  className = '',
  children,
  ..._rest
}) => {

  // Merging all classes using twMerge
  const combinedClasses = twMerge(align, color as string, cursor, margin, spacing, className);

  const Component = as;

  const { sizeStatic, ...rest } = _rest;

  return (
    <Component style={{ fontSize: size, fontWeight: weight }} className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
};
