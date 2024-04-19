import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <RotatingLines
      visible={true}
      height="28"
      width="28"
      color="#8A2BE2"
      backgroundColor="#8A2BE2"
      strokeWidth="4"
      animationDuration="0.8"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}