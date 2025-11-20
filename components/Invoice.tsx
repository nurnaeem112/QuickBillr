import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Invoice = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const element = printRef.current;
    if (!element) return;

    // Convert the element to canvas
    const canvas = await html2canvas(element, {
      scale: 2, // improves text/image quality
      backgroundColor: "#ffffff", // force white background
      useCORS: true,
    });

    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "px", "a4");

    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <div
        ref={printRef}
        className="bg-white p-6 rounded-xl shadow-xl max-w-[700px] w-full"
      >
        {/* Example invoice content */}
        <h1 className="text-3xl font-bold text-[#1C166C] mb-4">Invoice</h1>
        <p className="text-gray-700">Client: John Doe</p>
        <p className="text-gray-700">Amount: $250</p>
        <p className="text-gray-700 mt-2">Thank you for your business!</p>
      </div>

      <button
        onClick={handleDownloadPDF}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Invoice;
