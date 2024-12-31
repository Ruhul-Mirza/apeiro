import { cn } from "../../lib/utils";

export const WhyChooseCard = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const WhyChooseCardItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 cursor-pointer bg-gray-100 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="text-lg font-bold text-gray-900 text-opacity-100 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-normal text-gray-900 text-opacity-100 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>)
  );
};
