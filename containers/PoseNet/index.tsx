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
  const [image, setImage] = useState<any>(null);
  const [baseImage, setBaseImage] = useState<any>('golf.jpeg');
  const webcamRef = useRef<any>();
  const canvasRef = useRef<any>();
  const canvasRef2 = useRef<any>();
  const imageRef = useRef<any>();
  const imageRef2 = useRef<any>();
  const fileRef = useRef<any>();

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;
      setImage(result);
    };
  };

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

    // setInterval(() => {
    //   detect(net);
    // }, 2000);

    detect(net);
  };

  const detect = async (net: any) => {
    const image = imageRef.current;
    const image2 = imageRef2.current;
    if (image.src != '') {
      const pose = await net.estimateSinglePose(image);
      drawCanvas(pose, image, canvasRef);
    }
    if (image2.src != '') {
      const pose2 = await net.estimateSinglePose(image2);
      drawCanvas(pose2, image2, canvasRef2);
    }
  };

  const drawCanvas = (pose: any, image: any, canvas: any) => {
    const ctx = canvas.current.getContext('2d');
    canvas.current.width = imageRef.current.width;
    canvas.current.height = imageRef.current.height;

    drawKeypoints(pose['keypoints'], 0.5, ctx);
    drawSkeleton(pose['keypoints'], 0.5, ctx);
  };

  useEffect(() => {
    const tf = require('@tensorflow/tfjs');
    runPosenet();
  }, [image, baseImage]);

  return (
    <Container>
      <Menu>
        <Sport onClick={() => setBaseImage('golf.jpeg')}>골프</Sport>
        <Sport onClick={() => setBaseImage('soccer.jpeg')}>축구</Sport>
        <Sport onClick={() => setBaseImage('baseball2.png')}>야구</Sport>
        <Sport onClick={() => setBaseImage('basketball.png')}>농구</Sport>
      </Menu>
      <Content>
        <Pose>
          <Image ref={imageRef} src={baseImage}></Image>
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
            }}
          />
          <div>프로 자세</div>
        </Pose>
        <Pose>
          <Image ref={imageRef2} src={image}></Image>
          <canvas
            ref={canvasRef2}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
            }}
          />
          <Button onClick={() => fileRef.current.click()}>사진 변경</Button>
          <input
            type="file"
            ref={fileRef}
            style={{ display: 'None' }}
            onChange={handleFile}
          ></input>
        </Pose>
      </Content>
    </Container>
  );
};

export default PoseNetContainer;

const Container = styled.div<any>`
  height: 100vh;
  max-width: 985px;
  background-color: #faf3f3;
  margin: auto;
`;

const Menu = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 90%;
`;

const Sport = styled.button`
  background-color: #e1e5ea;
  padding: 15px;
  border: 0;
  border-radius: 10px;
  :hover {
    background-color: #a7bbc7;
  }
`;

const Image = styled.img`
  width: 60%;
  height: 80%;
  margin-bottom: 30px;
`;

const Pose = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const Button = styled.button`
  background-color: #e1e5ea;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  :hover {
    background-color: #a7bbc7;
  }
`;

//test
