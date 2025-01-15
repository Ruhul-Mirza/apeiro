import React from 'react';
import { ShieldCheckIcon, CursorArrowRippleIcon, BriefcaseIcon,  ChartBarSquareIcon } from '@heroicons/react/24/outline';

function WhyUs() {
  return (
    <div className="min-h-screen bg-white mt-12 px-2">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Strategic Approach</h2>
            <div className="space-y-12">
              {/* Custom Pointers with Icons */}
              <div className="flex gap-4">
                <ShieldCheckIcon className="w-7 h-7 text-gray-400 flex-shrink-0 stroke-green-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">We Do Not Charge for Non-Working Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We do not charge for data that bounces. You won’t have to pay for anything that doesn’t work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CursorArrowRippleIcon className="w-7 h-7 text-gray-400 flex-shrink-0 stroke-purple-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Over a Decade of Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With more than a decade of experience, we know our game and tricks to deliver the best results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <BriefcaseIcon className="w-7 h-7 text-gray-400 flex-shrink-0 stroke-red-600" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Verified Information & Contact List</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All the information and contact lists we provide are verified by our experienced compliance & quality teams.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ChartBarSquareIcon className="w-7 h-7 text-gray-400 flex-shrink-0 stroke-blue-900" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Serving Every Industry & Sector</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We serve businesses of all sizes and industries. Our goal is to help you reach yours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Industry Excellence</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Our commitment to excellence is reflected in our methodical approach to solving 
                complex business challenges. We leverage cutting-edge technology and industry 
                best practices to deliver sustainable, scalable solutions.
              </p>
              
              <ul className="space-y-4 text-gray-600 list-none pl-0">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  Comprehensive enterprise solutions tailored to your specific requirements
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  Advanced data analytics and business intelligence capabilities
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  Robust security frameworks ensuring data protection and compliance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  Scalable infrastructure designed for future growth and adaptation
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  Strategic consulting services backed by decades of experience
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <blockquote className="text-gray-600 font-semibold italic">
                  "Our partnership has been instrumental in transforming our operations and 
                  achieving unprecedented growth."
                </blockquote>
                <p className="text-sm text-gray-500 mt-4">
                  — James Mitchell, CEO of Global Solutions Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
