function Cards(props) {
  return (
    <a
      className="inline-block  h-60 w-60 hover:scale-105 ease-in-out duration-300 m-3 snap-start opacity-50 hover:opacity-100"
      href={props.url}
      target="_blank"
    >
      <img className="rounded-md" src={props.img} alt="" />
    </a>
  );
}

export default Cards;
