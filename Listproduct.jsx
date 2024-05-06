import { useEffect, useState } from "react";
import "./listproduct.css";

function Listproduct() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/allproduct");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteItem = async(id) =>{
      const response = await fetch("http://localhost:3000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id:id
      }),
      });
      fetchItems();
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="listproduct">
      <div className="Header">
        <p className="header">Product</p>
        <p className="header">Image</p>
        <p className="header">Category</p>
        <p className="header">Price</p>
        <p className="header">Discount (%)</p>
        <p className="header">Size</p>
        <p className="header">Color</p>
        <p className="header"></p>
      </div>

      <div className="ans">
            {items.length===0 ? <p className="alert">
              No Product Available
            </p> : <div className="body-list">
        {items.map((item, index) => (
          <div className="list-item" key={index}>

            <p className="li">
                {item.name}
            </p>

            <div className="li-img-div">
                {item.image.map((img, i) => (
                <img key={i} src={img} alt={`${item.name} image ${i}`} className="product-image" />
                ))}
            </div>

            <p className="li">{item.category}</p>
            <p className="li">{item.price}</p>
            <p className="li">{item.discount}</p>

            <div className="li">
                {item.size.map((s, i) => (
                    <p key={i}>
                        {s}
                    </p>
                ))}
            </div>

            <div className="li">
                {item.color.map((c, i) => (
                    <div style={{backgroundColor : `${c}`}} key={i} className="color"></div>
                ))}
            </div>

            <div className="li">
                <button className="remove-btn" 
                  onClick={()=>{
                      console.log(item._id);
                      deleteItem(item._id)
                  }}
                >
                  Remove
                </button>
                <button className="update-btn" name={item._id}>Update</button>
            </div>
          </div>
        ))}
      </div>}
      </div>

      
    
    </div>
  );
}

export default Listproduct;
