"use client";
import React, { useState, useEffect } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [stream, setStream] = useState(null);
  const [havePermissions, setHavePermissions] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
    const permissions = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    permissions
      .then((stream) => {
        alert("accepted the permissions");
        setHavePermissions((prevState) => {
          !prevState;
        });
      })
      .catch((err) => {
        setHavePermissions(false);
        console.log(`${err.name} : ${err.message}`);
      });
    const getCameraAccess = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setStream(mediaStream);
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getCameraAccess();
  }, []);

  return (
    <div>
      {stream && <video srcObject={stream} autoPlay />}
      {!stream && <p>Camera access denied or not supported.</p>}
    </div>
  );
}

export default BarcodeScanner;
