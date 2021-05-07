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

const PoseNetContainer = () => {
  const webcamRef = useRef<any>();
  const canvasRef = useRef<any>();
  const imageRef = useRef<any>();

  //   const runPosenet = async () => {
  //     const net = await posenet.load();

  //     setInterval(() => {
  //       detect(net);
  //     }, 100);
  //   };

  //   const detect = async (net: any) => {
  //     if (
  //       typeof webcamRef.current !== 'undefined' &&
  //       webcamRef.current !== null &&
  //       webcamRef.current.video.readyState === 4
  //     ) {
  //       const video = webcamRef.current.video;
  //       const videoWidth = webcamRef.current.video.videoWidth;
  //       const videoHeight = webcamRef.current.video.videoHeight;

  //       webcamRef.current.video.width = videoWidth;
  //       webcamRef.current.video.height = videoHeight;

  //       const pose = await net.estimateSinglePose(video);
  //       console.log(pose);

  //       console.log(canvasRef.current);

  //       drawCanvas(pose, video, canvasRef);
  //     }
  //   };

  //   const drawCanvas = (pose: any, video: any, canvas: any) => {
  //     const ctx = canvas.current.getContext('2d');
  //     canvas.current.width = webcamRef.current.video.width;
  //     canvas.current.height = webcamRef.current.video.height;

  //     drawKeypoints(pose['keypoints'], 0.5, ctx);
  //     drawSkeleton(pose['keypoints'], 0.5, ctx);
  //   };

  //   useEffect(() => {
  //     const tf = require('@tensorflow/tfjs');
  //     runPosenet();
  //   }, []);

  const runPosenet = async () => {
    const net = await posenet.load();

    setInterval(() => {
      detect(net);
    }, 2000);
  };

  const detect = async (net: any) => {
    const image = imageRef.current;
    console.log(image);
    const pose = await net.estimateSinglePose(image);
    console.log(pose);

    console.log(canvasRef.current);

    drawCanvas(pose, image, canvasRef);
  };

  const drawCanvas = (pose: any, image: any, canvas: any) => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = imageRef.current.width;
    canvas.current.height = imageRef.current.height;

    var part = [];

    part.push(pose['keypoints'][11]);
    part.push(pose['keypoints'][12]);
    part.push(pose['keypoints'][13]);
    part.push(pose['keypoints'][14]);
    part.push(pose['keypoints'][15]);
    part.push(pose['keypoints'][16]);

    console.log(pose['keypoints']);
    console.log(part);

    drawKeypoints(pose['keypoints'], 0.5, ctx);
    // drawKeypoints(part, 0.5, ctx);
    drawSkeleton(pose['keypoints'], 0.5, ctx);
    // drawSkeleton(part, 0.5, ctx);
  };

  useEffect(() => {
    const tf = require('@tensorflow/tfjs');
    runPosenet();
  }, []);

  return (
    <Container>
      <Image ref={imageRef} src="test3.jpeg"></Image>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', left: 0, top: 0 }}
      ></canvas>
    </Container>
  );
};

export default PoseNetContainer;

const Container = styled.div<any>`
  height: 100vh;
  overflow-y: scroll;
`;

const Image = styled.img`
  width: 600px;
  height: 600px;
`;

//test
