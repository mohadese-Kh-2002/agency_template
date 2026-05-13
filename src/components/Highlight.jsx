const TextHighlighter = ({ text, highlight }) => {
  const regex = new RegExp(`(${highlight})`, "gi");

  return (
    <>
      {text.split(regex).map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="text-(--primary) font-bold">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
};
export default TextHighlighter;
