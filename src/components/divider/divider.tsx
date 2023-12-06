export const Divider = ({ className = "", ...rest }) => {
  return <div className={`h-[1px] w-full mx-0 my-5 bg-[#5552] ${className}`} {...rest} />;
};
