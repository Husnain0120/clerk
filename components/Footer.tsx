"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  ChevronRight,
  Heart,
  X,
} from "lucide-react";

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
  >
    <Icon size={20} />
    <span className="font-light">{label}</span>
  </a>
);

const FooterSection = ({
  title,
  children,
  onClick,
}: {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <div className="mb-8 md:mb-0">
    <h3
      className="text-lg font-semibold text-white mb-4 flex items-center font-poppins cursor-pointer"
      onClick={onClick}
    >
      <ChevronRight className="mr-2" size={20} />
      {title}
    </h3>
    {children}
  </div>
);

const Popup = ({
  title,
  content,
  onClose,
}: {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-black text-white p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-poppins font-semibold">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-400">
          <X size={24} />
        </button>
      </div>
      <div className="font-roboto">{content}</div>
    </div>
  </div>
);

export default function FooterWithPopups() {
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const openPopup = (section: string) => {
    setActivePopup(section);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const popupContent = {
    about: (
      <div>
        <p className="mb-4">
          We are a company dedicated to providing innovative solutions for our
          customers. Our mission is to make technology accessible and beneficial
          for everyone.
        </p>
        <p className="mb-4">
          Founded in 2010, we've been at the forefront of technological
          advancements, constantly pushing the boundaries of what's possible.
        </p>
        <p className="mb-4">
          Our team consists of passionate individuals from diverse backgrounds,
          all united by a common goal: to create meaningful impact through
          technology.
        </p>
        <div className="flex items-center justify-center mt-6">
          <Heart className="text-red-500 mr-2" size={24} />
          <span className="font-medium">Made with passion</span>
        </div>
      </div>
    ),
    contact: (
      <div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Email:</h3>
          <p className="flex items-center text-gray-300">
            <Mail size={16} className="mr-2" /> info@example.com
          </p>
          <p className="flex items-center text-gray-300">
            <Mail size={16} className="mr-2" /> support@example.com
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Phone:</h3>
          <p className="flex items-center text-gray-300">
            <Phone size={16} className="mr-2" /> +1 (123) 456-7890
          </p>
          <p className="flex items-center text-gray-300">
            <Phone size={16} className="mr-2" /> +1 (987) 654-3210
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Address:</h3>
          <p className="flex items-center text-gray-300">
            <MapPin size={16} className="mr-2" /> 123 Tech Street, Silicon
            Valley, CA 94000
          </p>
        </div>
      </div>
    ),
    quickLinks: (
      <ul className="space-y-2">
        {[
          "Home",
          "About",
          "Services",
          "Products",
          "Blog",
          "Careers",
          "Contact",
          "Privacy Policy",
          "Terms of Service",
        ].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-gray-300 transition-colors duration-200 flex items-center"
            >
              <ExternalLink size={14} className="mr-2" />
              {item}
            </Link>
          </li>
        ))}
      </ul>
    ),
    followUs: (
      <div className="space-y-4">
        <SocialLink
          href="https://facebook.com"
          icon={Facebook}
          label="Facebook"
        />
        <SocialLink href="https://twitter.com" icon={Twitter} label="Twitter" />
        <SocialLink
          href="https://instagram.com"
          icon={Instagram}
          label="Instagram"
        />
        <SocialLink
          href="https://linkedin.com"
          icon={Linkedin}
          label="LinkedIn"
        />
        <p className="mt-4 text-gray-300">
          Follow us on social media to stay updated with our latest news,
          products, and innovations!
        </p>
      </div>
    ),
  };

  return (
    <footer className="bg-black text-white py-12 m-4 p-4 rounded-xl relative font-roboto shadow-lg w-[calc(100%-2rem)]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection
            title="Contact Us"
            onClick={() => openPopup("contact")}
          >
            <div className="space-y-2 font-light text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (123) 456-7890</span>
              </div>
            </div>
          </FooterSection>

          <FooterSection
            title="Quick Links"
            onClick={() => openPopup("quickLinks")}
          >
            <ul className="space-y-2 font-light text-gray-300">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-gray-300 transition-colors duration-200 flex items-center"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          <FooterSection
            title="Follow Us"
            onClick={() => openPopup("followUs")}
          >
            <div className="space-y-2">
              <SocialLink
                href="https://facebook.com"
                icon={Facebook}
                label="Facebook"
              />
              <SocialLink
                href="https://twitter.com"
                icon={Twitter}
                label="Twitter"
              />
            </div>
          </FooterSection>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 font-light">
            © 2024 Your Company Name. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4 font-poppins">
            <Globe size={16} />
            <span className="font-medium">English (US)</span>
            <span>|</span>
            <Link
              href="/sitemap"
              className="hover:text-gray-300 transition-colors duration-200 flex items-center font-medium"
            >
              <ExternalLink size={14} className="mr-2" />
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {activePopup && (
        <Popup
          title={activePopup.charAt(0).toUpperCase() + activePopup.slice(1)}
          content={popupContent[activePopup as keyof typeof popupContent]}
          onClose={closePopup}
        />
      )}
    </footer>
  );
}
