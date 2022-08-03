/**
 * This code is for possible implementation of an experimental feature:
 * To convert a next.js page to a pdf file for download by the user
 *     or ideally: for build-time time generation with output to downloadable file.
 *
 * This is to be use mainly for downloadable resumes but other uses may arise
 *
 * As of now, this code is unused as it is not functioning.
 *
 */

import React from 'react'
import { jsPDF /* ,HTMLOptionImage */ } from 'jspdf'
// import { toPng,toCanvas } from "html-to-image";
/* type props = {
  html?: React.MutableRefObject<HTMLDivElement>;
}; */

const GeneratePdf /* : React.FC<props> */ = ({ html }) => {
  const generatePdf = () => {
    const doc = new jsPDF()

    let split = doc.splitTextToSize(document.getElementById('text').innerText, 200)
    let image = document.getElementById('image').getAttribute('src')
    doc.text(document.querySelector('.generate-pdf  > h1').innerHTML, 75, 5)
    doc.addImage(image, 70, 7, 60, 60)
    doc.text(split, 5, 75)
    doc.output('dataurlnewwindow')
  }

  const generateImage = async () => {
    // const image = await toPng(html.current,{quality:0.95});
    const doc = new jsPDF()

    // doc.addImage(image,'JPEG',5,22,200,160);
    doc.save()
  }
  return (
    <div className="button-container">
      <button onClick={generateImage}>Get PDF using image</button>
      <button onClick={generatePdf}>Get PDF as text</button>
    </div>
  )
}

export default GeneratePdf
