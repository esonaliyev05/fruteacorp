import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  return (
    <div className="h-screen w-[1200px] mx-auto px-8">
      <h1 className="text-[20px] sm:text-[24px] font-bold mb-[15px] sm:mb-[30px]">
        Savollar va javoblar
      </h1>
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white">
        <Disclosure as="div" defaultOpen={false}>
          <DisclosureButton className="group flex w-full items-center justify-between hover:bg-green-200 rounded-lg p-4">
            <span className="text-sm/6 font-medium text-black">
              What is your refund policy?
            </span>
            <ChevronDown className="size-5 text-black group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 px-6 py-2">
            If you're unhappy with your purchase, we'll refund you in full.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
};

export default Faq;
