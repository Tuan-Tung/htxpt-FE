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
    <footer className="left-[260px] md:px-0">
      <div className="flex flex-col justify-between bg-white p-4 md:flex-row md:p-14">
        <div className="mb-4 flex flex-col items-center space-y-3.5 md:mb-0 md:items-start">
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
        <div className="mb-4 flex flex-col space-y-2.5 md:mb-0">
          <div className="text-primary font-bold">{CUSTOMER_SUPPORT_TEXT}</div>
          <div>{ABOUT_US_TEXT}</div>
          <div>{ABOUT_SYSTEM_TEXT}</div>
          <div>{BOOKING_TEXT}</div>
        </div>
        <div className="mb-4 flex flex-col space-y-2.5 md:mb-0">
          <div className="text-primary font-bold">{POLICY_TEXT}</div>
          <div>{SELL_POLICY_TEXT}</div>
          <div>{REFUND_POLICY_TEXT}</div>
          <div>{DELIVERY_POLICY_TEXT}</div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?..."
          className="mb-4 h-48 w-full rounded-md border-0 md:mb-0 md:w-48"
          loading="lazy"
        />
      </div>
      <div className="bg-primary p-2 px-5 text-center text-white">{`©Bản quyền thuộc về công ty SAM Việt Nam`}</div>
    </footer>
  );
};

export default Footer;
