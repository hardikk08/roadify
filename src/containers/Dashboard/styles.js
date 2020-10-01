import styled from '@emotion/styled/macro';

export const DistanceContainer = styled.div`
  height: 100%;
`;

export const Row = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100%
`;

export const CreationContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CreationHeader = styled.div`
  margin-top: 100px;
`;

export const Image = styled.img`
  width: auto !important;
  height: 160px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: black;
  &:hover {
    opacity: 1;
  }
`;

export const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const InfoColumn = styled.div`
  height: 55%;
  width: 80%;
  background-color: #90C978;
  border-radius: 50px;
  padding: 35px;
`;

export const Info = styled.div`
  margin-top: 30px;
  text-align: left;
`;

export const InfoHeader = styled.div`
  font-size: 25px;
  margin: 20px;
`;

export const InfoPoints = styled.div`
  font-size: 20px;
  margin: 20px;
`;