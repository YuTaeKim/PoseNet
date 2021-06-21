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

const PoseNetContainer = () => {
  const [result, setResult] = useState<any>(false);
  const [video, setvideo] = useState<any>(null);
  const [messiPose, setMessiPose] = useState<any>([]);
  const [ronaldoPose, setRonaldoPose] = useState<any>([]);
  const canvasRef3 = useRef<any>();
  const preloadRef1 = useRef<any>();
  const preloadRef2 = useRef<any>();
  const videoRef2 = useRef<any>();
  const videoRef3 = useRef<any>();
  const fileRef = useRef<any>();
  var interval;

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;
      setvideo(result);
    };
  };

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
    const preload = async () => {
      if (
        preloadRef1.current.src != '' &&
        preloadRef1.current.readyState >= 3
      ) {
        preloadRef1.current.currentTime = 0;
      }
      if (
        preloadRef2.current.src != '' &&
        preloadRef2.current.readyState >= 3
      ) {
        preloadRef2.current.currentTime = 0;
      }
    };
    preload();
  }, []);

  useEffect(() => {
    runPosenet();
    return () => clearInterval(interval);
  }, [videoRef3.current]);

  return (
    <Container>
      <ArrowBackIcon
        style={{
          top: 20,
          left: 20,
          width: 50,
          height: 50,
          position: 'relative',
        }}
        onClick={() => Router.back()}
      />
      <Preload>
        <video
          ref={preloadRef1}
          src="video/messi.mp4"
          width="80%"
          height="100%"
          onCanPlay={async () => {
            const net = await posenet.load();
            const preload1 = preloadRef1.current;
            // console.log(1, preload1.currentTime);
            const pose2 = await net.estimateSinglePose(preload1);
            if (preload1.currentTime + 0.5 < preload1.duration) {
              preload1.currentTime += 0.5;
            }
            // console.log(1, pose2);
            setMessiPose([...messiPose, pose2['keypoints']]);
            // console.log(messiPose);
          }}
        ></video>
        <video
          ref={preloadRef2}
          src="video/ronaldo.mp4"
          width="80%"
          height="100%"
          onCanPlay={async () => {
            const net = await posenet.load();
            const preload2 = preloadRef2.current;
            // console.log(2, preload2.currentTime);
            const pose2 = await net.estimateSinglePose(preload2);
            if (preload2.currentTime + 0.5 < preload2.duration) {
              preload2.currentTime += 0.5;
            }
            // console.log(2, pose2);
            setRonaldoPose([...ronaldoPose, pose2['keypoints']]);
            // console.log(ronaldoPose);
          }}
        ></video>
      </Preload>
      <Content>
        <Pose>
          <video
            ref={videoRef2}
            src={video}
            width="80%"
            height="100%"
            onCanPlay={async () => {
              const net = await posenet.load();
              const video2 = videoRef2.current;
              // console.log(video2.currentTime);
              const pose2 = await net.estimateSinglePose(video2);
              if (video2.currentTime + 0.5 < video2.duration) {
                video2.currentTime += 0.5;
              }
              // console.log(pose2);
            }}
            style={{ display: 'none' }}
          ></video>
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
          {videoRef3.current && videoRef3.current.src != '' ? null : (
            <Screen>슈팅 영상을 업로드 해주세요!</Screen>
          )}
        </Pose>
        <Button onClick={() => fileRef.current.click()}>영상 변경</Button>
        <input
          type="file"
          ref={fileRef}
          style={{ display: 'None' }}
          onChange={handleFile}
        ></input>
        {result ? null : (
          <Button onClick={() => setResult(true)}>결과 보기!</Button>
        )}

        {result ? <Label>호날두</Label> : null}
        {result ? (
          <Detail>
            <SubLabel>호날두 60%</SubLabel>
            <SubLabel>메시 10%</SubLabel>
            <SubLabel>베컴 20%</SubLabel>
            <SubLabel>베일 10%</SubLabel>
          </Detail>
        ) : null}

        <Button
          onClick={() =>
            Router.push(
              'http://cscp2.sogang.ac.kr/CSE4186/index.php/%EC%9E%90%EC%8B%A0%EC%9D%B4_%EC%A2%8B%EC%95%84%ED%95%98%EB%8A%94_%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%97%90_%EB%8C%80%ED%95%9C_%EC%9E%90%EC%84%B8_%EB%B6%84%EC%84%9D',
            )
          }
        >
          ml5 NeuralNetwork 참고 영상
        </Button>
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

const Preload = styled.div`
  width: 100%;
  height: 50vh;
  display: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Reference = styled.button`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #e1e5ea;
  padding: 15px;
  border: 0;
  border-radius: 10px;
  :hover {
    background-color: #a7bbc7;
  }
`;

const Pose = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 100px;
  background-color: #e1e5ea;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  :hover {
    background-color: #a7bbc7;
  }
`;

const Screen = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Label = styled.div`
  font-size: 2rem;
  color: Blue;
  margin-bottom: 100px;
`;

const SubLabel = styled.div`
  font-size: 1.3rem;
`;

const Detail = styled.div`
  width: 80%;
  margin-bottom: 50px;
  background-color: pink;
  border-radius: 20px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  height: 100px;
`;

const Wiki = styled.div``;

//test
