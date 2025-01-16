import React from 'react';
import { MapPinIcon,PhoneIcon,EnvelopeIcon,ClockIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Section */}
      <div className="relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-center text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Contact Information */}
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div>
                  <MapPinIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Location</h3>
                  <p className="mt-3 text-gray-500">85, Sector 1, Millenium Business Park,</p>
                    <p className='text-gray-500'> MIDC Industrial Area, Kopar Khairane, Navi Mumbai</p>
                  <p className="text-gray-500"> Maharashtra 400710</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div>
                  <PhoneIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-3 text-gray-500">+1 (555) 123-4567</p>
                  <p className="text-gray-500">Monday to Friday</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div>
                  <EnvelopeIcon className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-3 text-gray-500">aoun@apeiroresearch.com</p>
                  <p className="text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>

            </div>

            {/* Company Stats */}
            <div className="border-t border-gray-100 pt-16">
              <h3 className="text-lg font-medium text-gray-900 mb-8">Company Stats</h3>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-3xl font-light text-gray-900">24/7</div>
                  <div className="text-sm mt-2 text-gray-500">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900">1hr</div>
                  <div className="text-sm mt-2 text-gray-500">Average Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-50 border border-gray-100">
              <div className="py-12 px-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-medium text-gray-900">Contact Form</h2>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6GW5jA7lHiurSpbcy_M-WbcksxvgB8yjWXUJtXkU-U0rpRw/viewform?embedded=true" target="_blank">< ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400" /></a>
                </div>
                <div>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe6GW5jA7lHiurSpbcy_M-WbcksxvgB8yjWXUJtXkU-U0rpRw/viewform?embedded=true" 
                    className="w-full h-[600px] border-0 bg-white"
                    title="Contact Form"
                  >
                    Loading...
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact