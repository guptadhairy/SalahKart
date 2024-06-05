import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (event) => {
    setPageNumber(event.target.value);
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Upload and View PDF</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={onFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {file && (
        <div className="w-full flex justify-center">
          <Document
            file={URL.createObjectURL(file)}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="mt-4 flex gap-2">
            <button
              onClick={previousPage}
              disabled={pageNumber <= 1}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Previous
            </button>
            <input
              type="number"
              min="1"
              max={numPages}
              value={pageNumber}
              onChange={handlePageChange}
              className="w-12 text-center"
            />
            <button
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
