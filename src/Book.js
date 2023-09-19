const Book = (props) => {
  const { img, author, title, number } = props;
  return (
    <article className="book">
      <img src={img} alt="Narutos Image" />
      <h2>{title}</h2>
      <h2>{author}</h2>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
