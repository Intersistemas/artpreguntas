import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam';
import { Button } from '@mui/material'

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]
    );

    const onUserMedia = (e) => {
      console.log(e);
    };

    return (
      <>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
        <Button variant="outlined" onClick={capture}>Capturar Imagen</Button>
      </>
    );
  };

  export default WebcamCapture;