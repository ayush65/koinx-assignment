/** @format */

const ProgressBar = ({ bgColor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "60%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 1,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: 40,
    textAlign: "right",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
  );
};

export { ProgressBar };
