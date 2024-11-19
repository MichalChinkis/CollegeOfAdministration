import Item from "./Item"
 const List = (props)=>{
    return (
        <ul dir="rtl">
          {props.items.map((item) => (
            <Item item={item} />
          ))}
        </ul>
      );
    }
export default List