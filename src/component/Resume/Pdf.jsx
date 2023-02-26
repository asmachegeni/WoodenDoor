// import React, { useState } from "react";
// import { renderToString } from "react-dom/server";
// import jsPDF from "jspdf";
// const Pdf = () => {
//   const print = () => {
//     const string = renderToString(<Pdf />);
//     const pdf = new jsPDF("p", "mm", "a4");
//     const columns = [
//       "SOW Creation Date",
//       "SOW Start Date",
//       "Project",
//       "Last Updated",
//       "SOW End Date",
//     ];
//     var rows = [
//       [
//         "Dec 13, 2017",
//         "Jan 1, 2018",
//         "ABC Connect - ABCXYZ",
//         "Dec 13, 2017",
//         "Dec 31, 2018",
//       ],
//     ];
//     pdf.html(string);
//     pdf.save("pdf");
//   };
//   return (
//     <div>
//       <p>salam</p>
//       <button onClick={print}>pdf</button>
//     </div>
//   );
// };
// export default Pdf;

// import { useRef } from "react";
// import { jsPDF } from "jspdf";

// export default function Pdf() {
//   const pdfRef = useRef();

//   const handleDownload = () => {
//     const content = pdfRef.current;

//     const doc = new jsPDF();

//     doc.html(pdfRef.current, {
//       async callback(doc) {
//         await doc.save("pdf_name");
//       },
//     });
//   };

//   return (
//     <div>
//       <header ref={pdfRef}>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//         <div>l kldfjlkasjfld asjflkajf ljfasd'flksdasjf lsdasjfsadf</div>
//       </header>
//       <footer>
//         <button onClick={handleDownload}>Download</button>
//       </footer>
//     </div>
//   );
// }
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function Pdf() {
  const c = () => {
    const input = document.getElementById("content-22");
    // const inputHeightMm = pxToMm(input.offsetHeight);
    // const a4WidthMm = 210;
    // const a4HeightMm = 297;
    // const a4HeightPx = mmToPx(a4HeightMm);
    // const numPages =
    //   inputHeightMm <= a4HeightMm
    //     ? 1
    //     : Math.floor(inputHeightMm / a4HeightMm) + 1;
    // console.log({
    //   input,
    //   inputHeightMm,
    //   a4HeightMm,
    //   a4HeightPx,
    //   numPages,
    //   range: range(0, numPages),
    //   comp: inputHeightMm <= a4HeightMm,
    //   inputHeightPx: input.offsetHeight,
    // });

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Document of a4WidthMm wide and inputHeightMm high

      // elongated a4 (system print dialog will handle page breaks)
      let pddf = new jsPDF();

      pddf.addImage(imgData, "PNG", 0, 0);
      pddf.save("45.pdf");
    });
  };

  return (
    <div>
      <button className="button" onClick={c}>
        Generate PDF
      </button>
      <div id="content-22">
        <p>salam</p>
      </div>
    </div>
  );
}

export default Pdf;
