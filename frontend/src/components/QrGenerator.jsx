import { useState } from 'react'
import QRCode from "react-qr-code";
import "../App.css"
const QrGenerator = () => {
     const [text, setText] = useState("");
  return (
    <>
      <div className="main_container">
          <div className="input_container">
            <input
              type="text"
              placeholder="Type..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </div>

          <div className="content_container">
            {
            text ?(
              <QRCode
                value={text} // વપરાશકર્તા દાખલ કરેલું ટેક્સ્ટ અથવા URL
                size={200} // QR Codeનું કદ
                level="H" // High-level Error Correction
              />
            ) : (
              <QRCode
              value={"Hare Krishna :)"} // વપરાશકર્તા દાખલ કરેલું ટેક્સ્ટ અથવા URL
              size={200} // QR Codeનું કદ
              level="H" // High-level Error Correction
            />
            )}
          <h3>Scan And Check Result :)</h3>
          </div>
      </div>
    </>
  )
}

export default QrGenerator