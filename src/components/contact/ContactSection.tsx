'use client';

import { MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
            Get In Touch With Us
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 md:space-y-10 lg:space-y-12">
            {/* Address */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3">
                  Address
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  236 5th SE Avenue, New York<br />
                  NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 mt-1">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3">
                  Phone
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Mobile: +(84) 546-6789<br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-4 md:gap-6">
              <div className="flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3">
                  Working Time
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Monday-Friday: 9:00 - 22:00<br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm md:text-base font-medium mb-3 md:mb-4">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abc"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm md:text-base font-medium mb-3 md:mb-4">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Abc@def.com"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm md:text-base font-medium mb-3 md:mb-4">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="This is an optional"
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-medium mb-3 md:mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! I'd like to ask about"
                  rows={4}
                  className="w-full px-4 md:px-6 py-3 md:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-[#A07925] text-white font-medium py-3 md:py-4 px-12 md:px-16 rounded-lg transition-colors text-sm md:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
