import * as AlertDialog from '@radix-ui/react-alert-dialog';
import React from 'react';

interface IProps {
  phone: string;
  title: string;
}
const AlertDialogDemo = ({ phone, title }: IProps) => (
  <AlertDialog.Portal>
    <AlertDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-blackA6" />
    <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
      <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
        Nhà vườn {title}
      </AlertDialog.Title>
      <AlertDialog.Description className="text-mauve11 mb-5 mt-4 text-[15px] leading-normal flex items-center">
        <AlertDialog.Description className='pr-2'>Vui lòng liên hệ qua số điện thoại:</AlertDialog.Description>
        <AlertDialog.Description className='text-lg'>{phone}</AlertDialog.Description>
      </AlertDialog.Description>
      <div className="flex justify-end gap-[25px]">
        <AlertDialog.Cancel asChild>
          <button className="text-mauve11 bg-mauve4 hover:bg-mauve5 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Cancel
          </button>
        </AlertDialog.Cancel>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
);

export default AlertDialogDemo;
