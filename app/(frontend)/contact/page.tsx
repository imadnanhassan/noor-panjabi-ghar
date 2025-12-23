import React from "react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-center text-muted mb-6">
        We'd love to hear from you. Get in touch with Noor Panjabi Ghar.
      </p>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          <strong>Address:</strong> [Your Address Here]
        </p>
        <p className="mb-4">
          <strong>Phone:</strong> [Your Phone Number]
        </p>
        <p className="mb-4">
          <strong>Email:</strong> info@noorpanjabighar.com
        </p>
        {/* Contact form can be added here */}
      </div>
    </div>
  );
}
