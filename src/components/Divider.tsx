const paths = [
    "M2 1.6H614",
    "M2 1.8H614",
    "M2 2H614",
    "M2 2.2H614",
    "M2 2.4H614",
  ];
  
  const Divider = ({ index }: { index: number }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="616"
        height="4"
        viewBox="0 0 616 4"
        className="divider"
      >
        <path d={paths[index]} stroke="#846886" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  };
  
  export default Divider;
  