const ReduceString = ({ text }: { text: string }) => {
  const reducedString = text.length > 20 ? text.substring(0, 18) + "..." : text;
  return <p>{reducedString}</p>;
};

export default ReduceString;
