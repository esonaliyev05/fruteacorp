import React from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { X } from "lucide-react";

const Modal = ({ close, isOpen }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-white/5 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl p-6 bg-white  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-base font-medium flex items-center justify-between"
            >
              Biz bilan bog'lanish
              <X
                className="cursor-pointer bg-green-400 rounded-full"
                onClick={close}
              />
            </DialogTitle>
            <p className="mt-2 text-sm font-normal w-full">
              Mutaxassislarimizga siz uchun qulay shaklda savol bering:
            </p>
            <div className="mt-4">
              <div className="flex gap-2 cursor-pointer hover:bg-green-300 p-2 rounded-2xl">
                <a
                  target="_blank"
                  href="https://t.me/fruteacorp"
                  class="cursor-pointer flex items-center gap-[10px] p-[5px] hover:bg-custom-green-400 rounded-[10px]"
                >
                  <picture>
                    <img
                      src="data:image/svg+xml,%3csvg%20data-v-438291e5=''%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20class='ui-icon%20'%3e%3cg%20clip-path='url(%23clip0_883_569)'%3e%3cpath%20d='M24%200c20%200%2024%204%2024%2024s-4%2024-24%2024S0%2044%200%2024%204%200%2024%200Z'%20fill='url(%23paint0_linear_883_569)'%3e%3c/path%3e%3cpath%20d='M11.792%2023.799c6.996-3.048%2011.662-5.058%2013.996-6.029%206.665-2.772%208.05-3.254%208.953-3.27.198-.003.642.046.93.28.242.196.31.463.341.65.032.186.072.612.04.944-.36%203.795-1.924%2013.005-2.719%2017.255-.336%201.798-.998%202.401-1.64%202.46-1.394.129-2.452-.92-3.802-1.806-2.112-1.384-3.305-2.246-5.356-3.597-2.37-1.562-.833-2.42.517-3.823.354-.367%206.494-5.952%206.613-6.459.015-.063.029-.3-.111-.424-.14-.125-.348-.082-.497-.048-.212.048-3.587%202.278-10.124%206.69-.958.659-1.825.979-2.602.962-.857-.018-2.506-.484-3.731-.883-1.503-.488-2.698-.747-2.594-1.576.054-.432.65-.874%201.786-1.326Z'%20fill='%23fff'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_883_569'%20x1='24'%20y1='0'%20x2='24'%20y2='47.644'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%232AABEE'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23229ED9'%3e%3c/stop%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_883_569'%3e%3cpath%20fill='%23fff'%20d='M0%200h48v48H0z'%3e%3c/path%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                      alt="telegram icon"
                    />
                  </picture>
                  <div>
                    <h3 className="text-base font-semibold">Telegram</h3>
                    <p className="text-xs text-custom-gray-500">@fruteacorp</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 cursor-pointer hover:bg-green-300 p-2 rounded-2xl">
                <a
                  target="_blank"
                  href="tel:+998998835888"
                  className="cursor-pointer flex items-center gap-[10px] p-[5px] hover:bg-custom-green-400 rounded-[10px]"
                >
                  <picture>
                    <img
                      src="data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='%231f2026'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3cpath%20d='M22%200C40.3333%200%2044%203.66667%2044%2022C44%2040.3333%2040.3333%2044%2022%2044C3.66667%2044%200%2040.3333%200%2022C0%203.66667%203.66667%200%2022%200Z'%20fill='%2344bd32'%20/%3e%3cpath%20fillRule='evenodd'%20clipRule='evenodd'%20d='M32.7084%2026.6639C32.1222%2026.3724%2029.2386%2024.9619%2028.7009%2024.7668C28.1631%2024.5717%2027.772%2024.4752%2027.3819%2025.0583C26.9907%2025.6425%2025.8668%2026.9555%2025.5252%2027.3445C25.1836%2027.7336%2024.8409%2027.7818%2024.2547%2027.4903C23.6685%2027.1988%2021.7792%2026.5832%2019.5392%2024.5963C17.7964%2023.0501%2016.6195%2021.1406%2016.2768%2020.5565C15.9341%2019.9723%2016.2407%2019.6572%2016.5338%2019.3668C16.7976%2019.1056%2017.12%2018.6862%2017.4131%2018.3453C17.7062%2018.0045%2017.8043%2017.7612%2017.9993%2017.3721C18.1943%2016.983%2018.0974%2016.6422%2017.9508%2016.3506C17.8043%2016.0591%2016.6319%2013.1887%2016.1426%2012.0215C15.6669%2010.8845%2015.1833%2011.0381%2014.8237%2011.0202C14.4821%2011.0034%2014.0909%2011%2013.6997%2011C13.3085%2011%2012.6739%2011.1458%2012.1361%2011.7299C11.5984%2012.3141%2010.0833%2013.7246%2010.0833%2016.5939C10.0833%2019.4644%2012.1846%2022.2361%2012.4777%2022.6252C12.7708%2023.0142%2016.6127%2028.9042%2022.495%2031.4293C23.894%2032.0303%2024.9864%2032.3891%2025.8375%2032.657C27.2421%2033.1011%2028.5205%2033.0383%2029.5317%2032.888C30.6579%2032.721%2033.0016%2031.4775%2033.4897%2030.1152C33.9778%2028.7528%2033.9778%2027.5856%2033.8313%2027.3423C33.6847%2027.1023%2033.2947%2026.9566%2032.7084%2026.6639Z'%20fill='white'%20/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_7927_339227'%20x1='22'%20y1='0.958977'%20x2='22'%20y2='42.5781'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20stopColor='%2316CA4E'%20/%3e%3cstop%20offset='1'%20stopColor='%2314B847'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                      alt="whatsap icon"
                    />
                  </picture>
                  <div>
                    <div className="text-base font-semibold">
                      +998 (99) 883-58-88
                    </div>
                    <div className="text-xs text-custom-gray-500">
                      O'zbekiston bo'ylab qung'iroq
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
