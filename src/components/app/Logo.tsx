interface LogoProps {
  small?: boolean;
}

export const Logo = (props: LogoProps) => {
  const size = !props.small ? "64" : "48";
  const fontSize = !props.small ? "32pt" : "6pt";
  return !props.small ? (
    <div className="flex items-center leading-none justify-center text-center w-64 h-64 rounded-full bg-black text-white dark:bg-white dark:text-black text-[32pt] font-bold">
      Logo
    </div>
  ) : (
    <div className="flex items-center leading-none justify-center text-center w-20 h-20 rounded-full bg-black text-white dark:bg-white dark:text-black text-[6pt] font-bold">
      Logo
    </div>
  );
};
