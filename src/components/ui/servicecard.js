import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

export function ServiceCard({ icon: Icon, title, description }) {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="flex cursor-pointer flex-col justify-between gap-5 rounded-2xl bg-white p-5 pb-2 border border-zinc-200 hover:shadow-sm hover:shadow-slate-800/45">
      <div className="flex gap-4 flex-col-reverse md:flex-row justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-md">{title}</span>
          <span className="leading-5 text-sm font-medium text-gray-500">
            {description}
          </span>
        </div>
        <div className="">
          <button className="shadow-sm border px-3 py-2 rounded-lg border-gray-300">
            <Icon className="h-6 w-5 text-slate-700" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t border-zinc-200 flex justify-end pt-2">
        <Tooltip content="Know More" color="foreground" className="px-3 py-2 rounded-md text-xs" delay={500} isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <button className="hover:bg-gray-100 p-2 rounded-full text-slate-500">
          <ArrowTopRightOnSquareIcon className="h-5 w-5"/>
        </button>
        </Tooltip>
      </div>
    </div>
  );
}
