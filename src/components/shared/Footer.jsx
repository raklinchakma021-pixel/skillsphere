"use client";

import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            SkillSphere
          </h2>
          <p className="text-sm leading-6">
            Learn new skills, grow your career, and explore endless opportunities
            with our modern learning platform.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@skillsphere.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Location: Chattogram, Bangladesh</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="hover:text-blue-500 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="hover:text-sky-400 transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="hover:text-white transition" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}