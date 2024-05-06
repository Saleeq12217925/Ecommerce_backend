import "./addproduct.css";
import { useState } from "react";

function Addproduct() {
  const [productdetails, setproductdetails] = useState({
    name: "",
    description: "", 
    category: "shirt",
    price: "",
    discount: "",
  });


  const productHandler = (e) => {
    setproductdetails({ ...productdetails, [e.target.name]: e.target.value });
  };

  const addInputField = () => {
    const div = document.querySelector('.links-inp-bars-1');
    const node = document.createElement("input");
    node.placeholder = "Image-URL";
    div.appendChild(node);
  };

  const addInputField2 = () => {
    const div = document.querySelector('.links-inp-bars-2');
    const node = document.createElement("input");
    node.placeholder = "Image-URL";
    div.appendChild(node);
  };

  // const addProduct = async () => {

  //   const product = {
  //     name : productdetails.name,
  //     description : productdetails.description,
  //     category :  productdetails.category,
  //     price :  productdetails.price,
  //     discount : productdetails.discount,
  //     size : getSize(),
  //     image : getImages(),
  //     color : getColors()
  //   }
    

  //   await (fetch("http://localhost:3000/addproduct", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(product),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       alert(data.msg);
  //     }));
  // };

  const addProduct = async () => {
    const product = {
      name: productdetails.name,
      discription: productdetails.description,
      category: productdetails.category,
      price: productdetails.price,
      discount: productdetails.discount,
      size: getSize(),
      image: getImages(),
      color: getColors()
    };
  
    try {
      const response = await fetch("http://localhost:3000/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });
  
      if (!response.ok) {
        throw new Error("Failed to add product");
      }
  
      const data = await response.json();
      alert(data.msg); // Display success message from the server
    } catch (error) {
      console.error("Error adding product:", error.message);
      alert("Failed to add product"); // Display error message to the user
    }
  };
  

  const getSize = () => {
    const checkboxes = document.querySelectorAll('.size-checkbox');
    const selectedSizes = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedSizes.push(checkbox.value);
      }
    });
    return selectedSizes;
  };

  const getColors = () => {
    const inputs = document.querySelectorAll('.links-inp-bars-1 input');
    const colors = [];
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        colors.push(input.value.trim());
      }
    });
    return colors;
  };

  const getImages = () => {
    const inputs = document.querySelectorAll('.links-inp-bars-2 input');
    const images = [];
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        images.push(input.value.trim());
      }
    });
    return images;
  };

  return (
    <div className="addproduct">
      <div className="addproduct-field-1">
        <p>Product name</p>
        <input
          type="text"
          name="name"
          placeholder="product name"
          onChange={productHandler}
        />
      </div>

      <div className="addproduct-field-1">
        <p>Product description</p>
        <input
          type="text"
          name="description"
          placeholder="product description"
          onChange={productHandler}
        />
      </div>

      <div className="addproduct-field-2">
        <div className="addproduct-field">
          <p>Price</p>
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={productHandler}
          />
        </div>
        <div className="addproduct-field">
          <p>Discount %</p>
          <input
            type="text"
            name="discount"
            placeholder="discount %"
            onChange={productHandler}
          />
        </div>
      </div>

      <div className="addproduct-field-3">
        <div>
          <p>category</p>
          <select name="category" onChange={productHandler}>
            <option value="shirt">shirt</option>
            <option value="t-shirt">t-shirt</option>
            <option value="trousers">trousers</option>
            <option value="jeans">jeans</option>
            <option value="shorts">shorts</option>
            <option value="hoodies">hoodies</option>
          </select>
        </div>

        <div className="size-select">
          <p>size</p>
          <div className="checkbox_class">
            <input className="size-checkbox" type="checkbox" value="S" />
            <span>S</span>
          </div>
          <div className="checkbox_class">
            <input className="size-checkbox" type="checkbox" value="M" />
            <span>M</span>
          </div>
          <div className="checkbox_class">
            <input className="size-checkbox" type="checkbox" value="L" />
            <span>L</span>
          </div>
          <div className="checkbox_class">
            <input className="size-checkbox" type="checkbox" value="XL" />
            <span>XL</span>
          </div>
        </div>

        <div>
          <p>colors</p>
          <div className="link-uploader">
            <div className="links-inp-bars-1 link-uploader-inp">
              <input type="text" placeholder="Image-URL" className="img-url" />
            </div>
            <button className="add-field-1" onClick={addInputField}>
              Add Field
            </button>
          </div>
        </div>
      </div>

      <div>
        <p>Images</p>
        <div className="link-uploader">
          <div className="links-inp-bars-2 link-uploader-inp">
            <input type="text" placeholder="Image-URL" className="img-url" />
          </div>
          <button className="add-field-2" onClick={addInputField2}>
            Add Field
          </button>
        </div>
      </div>

      <button className="add-btn" onClick={addProduct}>
        Add
      </button>
    </div>
  );
}

export default Addproduct;
