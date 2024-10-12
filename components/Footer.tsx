"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Mail, Phone } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 m-4 p-4 rounded-xl relative font-roboto shadow-lg w-[calc(100%-2rem)]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
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
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-light text-gray-300">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300 font-light">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
