function List(props) {
  return (
    <li className="p-4 hover:border-b border-[#00df9a] ease-in-out duration-900 cursor-pointer">
      {props.title}
    </li>
  );
}
export default List;
