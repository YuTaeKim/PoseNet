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

const ReferenceContainer = () => {
  const [video, setvideo] = useState<any>('video/messi.mp4');
  const videoRef3 = useRef<any>();
  const canvasRef3 = useRef<any>();
  var interval;

  const runPosenet = async () => {
    const net = await posenet.load();

    interval = setInterval(() => {
      detect(net);
    }, 100);

    // detect(net);
  };

  const detect = async (net: any) => {
    const video3 = videoRef3.current;
    video3.width = video3.videoWidth;
    video3.height = video3.videoHeight;

    if (video3.src != '' && video3.readyState >= 3) {
      const pose3 = await net.estimateSinglePose(video3);
      drawCanvas(pose3, video3, canvasRef3);
    }
  };

  const drawCanvas = (pose: any, video: any, canvas: any) => {
    const ctx = canvas.current.getContext('2d');
    // console.dir(videoRef3.current);
    canvas.current.width = videoRef3.current.videoWidth;
    canvas.current.height = videoRef3.current.videoHeight;

    drawKeypoints(pose['keypoints'], 0.5, ctx);
    drawSkeleton(pose['keypoints'], 0.5, ctx);
    // console.log(pose);
  };

  useEffect(() => {
    const tf = require('@tensorflow/tfjs');
  }, []);

  useEffect(() => {
    runPosenet();
    return () => clearInterval(interval);
  }, [videoRef3.current]);

  return (
    <Container>
      <ArrowBackIcon
        style={{
          position: 'relative',
          top: 20,
          left: 20,
          width: 50,
          height: 50,
          zIndex: 1,
        }}
        onClick={() => Router.back()}
      />
      <Menu>
        <Sport onClick={() => setvideo('video/messi.mp4')}>Messi</Sport>
        <Sport onClick={() => setvideo('video/ronaldo.mp4')}>Ronaldo</Sport>
        <Sport onClick={() => setvideo('video/bale.mp4')}>Bale</Sport>
        <Sport onClick={() => setvideo('video/beckham.mp4')}>Beckham</Sport>
      </Menu>
      <Content>
        <Pose>
          <video
            ref={videoRef3}
            src={video}
            width="80%"
            height="100%"
            autoPlay
            loop
            muted
            style={{ position: 'relative', zIndex: 5 }}
          ></video>
          {/* {console.log(videoRef3.current)} */}
          <canvas
            ref={canvasRef3}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          />
        </Pose>
      </Content>
    </Container>
  );
};

export default ReferenceContainer;

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
