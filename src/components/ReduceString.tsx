const ReduceString = ({ text, strLength= 18 }: { text: string, strLength?:number }) => {
  const reducedString = text.length > strLength ? text.substring(0, strLength) + "..." : text;
  return <p>{reducedString}</p>;
};

export default ReduceString;
