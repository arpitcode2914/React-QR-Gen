import { useState } from 'react'
import QRCode from "react-qr-code";
import "../App.css"
const QrGenerator = () => {
     const [text, setText] = useState("");
  return (
    <>
      <div className="main_container">
          <div className="input_container">
              <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type something here..."
                  rows={5}   // Fixed number of rows
                  cols={40}
               />
          </div>
             

          <div className="content_container"> 
            <div className='qr_container'>
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
            </div>
            
          <h3>Scan And Check Result :)</h3>
          </div>
          
      </div>
    </>
  )
}

export default QrGenerator