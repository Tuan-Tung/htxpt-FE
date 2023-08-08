import Image from 'next/image';
import React from 'react';

import {
  ABOUT_SYSTEM_TEXT,
  ABOUT_US_TEXT,
  BOOKING_TEXT,
  CUSTOMER_SUPPORT_TEXT,
  DELIVERY_POLICY_TEXT,
  FOOTER_FACEBOOK_TEXT,
  FOOTER_LOCATION_TEXT,
  POLICY_TEXT,
  REFUND_POLICY_TEXT,
  SELL_POLICY_TEXT,
} from '@/constants/footer';
import { FooterFacebook, FooterLocation, FooterLogo, FooterMail } from '@/public/images';

const Footer = (): React.ReactElement => {
  return (
    <footer className="left-[260px]">
      <div className="flex justify-between bg-white p-14">
        <div className="flex flex-col space-y-3.5">
          <Image src={FooterLogo.src} alt="logo" width={158} height={58} />
          <div className="text-dark-grey flex space-x-3">
            <Image src={FooterLocation.src} alt="location" width={20} height={20} />
            <div>{FOOTER_LOCATION_TEXT}</div>
          </div>
          <div className="text-dark-grey flex space-x-3">
            <Image src={FooterMail.src} alt="mail" width={20} height={20} />
            <div>{FOOTER_LOCATION_TEXT}</div>
          </div>
          <div className="text-dark-grey flex space-x-3">
            <Image src={FooterFacebook.src} alt="facebook" width={20} height={20} />
            <div>{FOOTER_FACEBOOK_TEXT}</div>
          </div>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="font-bold text-primary">{CUSTOMER_SUPPORT_TEXT}</div>
          <div>{ABOUT_US_TEXT}</div>
          <div>{ABOUT_SYSTEM_TEXT}</div>
          <div>{BOOKING_TEXT}</div>
        </div>
        <div className="flex flex-col space-y-2.5">
          <div className="font-bold text-primary">{POLICY_TEXT}</div>
          <div>{SELL_POLICY_TEXT}</div>
          <div>{REFUND_POLICY_TEXT}</div>
          <div>{DELIVERY_POLICY_TEXT}</div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.746942696591!2d105.6827828!3d21.0346432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313456a8a9642663%3A0x3cd6a2c38e4261a!2zVUJORCB4w6MgxJDhuq9jIFPhu58!5e0!3m2!1svi!2s!4v1690529863337!5m2!1svi!2s"
          className="h-48 w-48 rounded-md border-0"
          loading="lazy"
        />
      </div>
      <div className="bg-primary p-2 px-5 text-center text-white">{`©Bản quyền thuộc về công ty SAM Việt Nam`}</div>
    </footer>
  );
};

export default Footer;
