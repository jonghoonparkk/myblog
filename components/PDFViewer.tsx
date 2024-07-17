import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PDFViewer = ({ file }) => (
  <div>
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default PDFViewer;
