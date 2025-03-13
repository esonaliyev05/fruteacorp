import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { faqData } from "./data";

const Faq = () => {
  return (
    <div className="h-full w-[1200px] mx-auto px-8 ">
      <h1 className="text-[20px] sm:text-[24px] font-bold mb-[15px] sm:mb-[30px]">
        Savollar va javoblar
      </h1>
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white">
        {faqData.map((item, index) => (
          <Disclosure as="div" defaultOpen={false} key={index}>
            <DisclosureButton className="group flex w-full items-center justify-between hover:bg-green-200 rounded-lg p-2 cursor-pointer">
              <span className="font-medium text-[16px] sm:text-[18px] flex justify-between items-center px-[14px] py-[16px] transition-all duration-300 hover:bg-custom-green-400">
                {item.name}
              </span>
              <ChevronDown className="size-5 text-black group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="p-[10px] pl-5 text-sm sm:text-base">
              {item.text}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Faq;
