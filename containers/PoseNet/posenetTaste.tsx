import Router from 'next/router';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import * as posenet from '@tensorflow-models/posenet';
import Webcam from 'react-webcam';
import { drawKeypoints, drawSkeleton } from 'utils/PoseNetDraw';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TasteContainer = () => {
  const webcamRef = useRef<any>();
  const canvasRef = useRef<any>();

  const runPosenet = async () => {
    const net = await posenet.load();

    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net: any) => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const pose = await net.estimateSinglePose(video);
      console.log(pose);

      console.log(canvasRef.current);

      drawCanvas(pose, video, canvasRef);
    }
  };

  const drawCanvas = (pose: any, video: any, canvas: any) => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = webcamRef.current.video.width;
    canvas.current.height = webcamRef.current.video.height;

    drawKeypoints(pose['keypoints'], 0.5, ctx);
    drawSkeleton(pose['keypoints'], 0.5, ctx);
  };

  useEffect(() => {
    const tf = require('@tensorflow/tfjs');
    runPosenet();
  }, []);

  return (
    <Container>
      <ArrowBackIcon
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          width: 50,
          height: 50,
        }}
        onClick={() => Router.back()}
      />
      <Webcam ref={webcamRef}></Webcam>
      <canvas ref={canvasRef} style={{ position: 'absolute' }}></canvas>
    </Container>
  );
};

export default TasteContainer;

const Container = styled.div<any>`
  position: relative;
  height: 100vh;
  max-width: 985px;
  background-color: #faf3f3;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
