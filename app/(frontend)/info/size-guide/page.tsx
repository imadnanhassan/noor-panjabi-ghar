import React from "react";

export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Size Guide</h1>
      <p className="text-center text-muted mb-6">
        Find the perfect fit with our size guide.
      </p>
      <div className="max-w-4xl mx-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Size</th>
              <th className="border border-gray-300 px-4 py-2">
                Chest (inches)
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Waist (inches)
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Length (inches)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                S
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                34-36
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                28-30
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                28
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">
                M
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                36-38
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                30-32
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                29
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">
                L
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                38-40
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                32-34
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                30
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">
                XL
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                40-42
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                34-36
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                31
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-muted">
          * Measurements are approximate. Please refer to individual product
          descriptions for specific sizing information.
        </p>
      </div>
    </div>
  );
}
