import { useState } from "react";
import { useDrop } from "react-dnd";

export default function Board() {
  const [items, setItems] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: "ITEM",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      setItems([...items, { id: items.length, ...item, ...offset }]);
    },
  }));

  return (
    <div ref={drop} style={{ width: "100%", height: "500px", border: "1px solid black" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            backgroundColor: "lightblue",
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
