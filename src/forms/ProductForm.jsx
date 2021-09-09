import React, { useState, useEffect } from 'react';
import withCard from '../hoc/withCard';
import { v4 as uuidv4 } from 'uuid';
const CategoryForm = () => {
  
  const [value, setValue] = useState({
      'product_name':'',
      'slug':'',
      'des' :'',
      'price': 0,
      'product_image': null,
      'stock': 1,
      'is_available': false,
      'category':0,
      'image' : null
  });  
  const [categories, setCat] = useState([]);
  const [colors, setColors] = useState([ { color:''} ]);
  const [sizes, setSizes] = useState([ { size:''} ]);
  
  const handleProductChange = (e) => { setValue( {...value, product_name       :e.target.value});}
  const handleSlugChange = (e) => { setValue( {...value, slug                  :e.target.value});}
  const handleDesChange = (e) => { setValue( {...value, des                    :e.target.value});}
  const handlePriceChange = (e) => { setValue( {...value, price                :e.target.value});}
  const handleProductImageChange = (e) => { setValue( {...value, product_image :e.target.files[0] });}
  const handleStockChange = (e) => { setValue( {...value, category_name        :e.target.value});}
  const handleIsAvailableChange = (e) => { 
    let cond = !value.is_available;
    setValue( {...value, is_available   :cond});}
  const handleCatChange = (e) => { setValue( {...value, category   :e.target.value});}
  //const handleImageChange = (e) => { setValue( {...value, ca :e.target.value});}

  // ---------  add color fields -----------------------
  const handleAddColorFields = () => {
    setColors([...colors, { color:'' }])
  }

  const handleRemoveColorFields = id => {

    const values  = [...colors];
    // if value has 1 then keep only 1 field
    if (values.length == 1) {
      return true;
    }

    values.splice(id, 1);
    setColors(values);
  }

  const handleChangeColorInput = (id, event) => {
    const values = [...colors]
    values[id][event.target.name] = event.target.value
    setColors(values);
    console.log(colors);
  }
  //----------------- color events are finished here---------------------

    // ---------  add size fields -----------------------
    const handleAddSizeFields = () => {
      setSizes([...sizes, { size:'' }])
    }
  
    const handleRemoveSizeFields = id => {
      const values  = [...sizes];
      if (values.length == 1) {
        return true;
      }
      values.splice(id, 1);
      setSizes(values);
    }
  
    const handleChangeSizeInput = (id, event) => {
      const values = [...sizes]
      values[id][event.target.name] = event.target.value
      setSizes(values);
      console.log(sizes);
    }
    //----------------- size events are finished here---------------------

    
  const handleOnSubmit = (e) =>  { 
      e.preventDefault(); 
      console.log(value); 
      console.log(colors)
  }

  useEffect(() => {
    fetch('http://localhost:8000/api/store/category-list/', {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => response.json())
        .then((categories) => {
            setCat(categories);
        });
    }, []);


    return (
        
           <form onSubmit={handleOnSubmit} className="form-row">             
                  <div className="form-group col-12 col-md-3">
                      <label>Product Name</label>
                      <input type="text" 
                        className="form-control form-control-sm" 
                        name="product_name" 
                        placeholder="Product Name" 
                        onChange={handleProductChange}
                        value={value.product_name} />
                  </div>
                  <div className="col-md-9"></div>

                  <div className="form-group col-md-3">
                        <label >Slug</label>
                        <input type="text" 
                          className="form-control form-control-sm" 
                          name="slug" 
                          placeholder="Password" 
                          value={value.slug}
                          onChange={handleSlugChange}
                        />
                  </div>

                  <div className="form-group col-md-3">
                        <label >Price</label>
                        <input type="number"
                            className="form-control form-control-sm"
                            name="price" 
                            value={value.price}
                            onChange={handlePriceChange} />
                  </div>

                  <div className="form-group col-md-3">
                        <label>Stock</label>
                        <input type="number"
                             name="stock"
                             className="form-control form-control-sm"
                             onChange={handleStockChange}
                             value={value.stock}  />
                  </div>

                  
                  <div className="form-group col-md-3">
                        <label>Product Category: </label>
                        <select className="form-control form-control-sm" 
                          onChange={handleCatChange}>
                          <option>select one </option>
                          { categories.map( cat => 
                            <option value={cat.id}>{cat.category_name}</option>
                          ) }
                        </select>
                    </div>

                  <div className="form-group col-md-6">
                          <label >Image: </label>
                          <input type="file"
                            className="custom-file-input form-control-sm" 
                            name="image"
                            value={value.image}
                            onChange={handleProductImageChange} />
                  </div>

                  <div className="form-group col-md-7">
                        <label >Description</label>
                        <textarea className="form-control form-control-sm" 
                            name="des"
                            value={value.des}
                            onChange={handleDesChange}
                        ></textarea>
                  </div>
                  
                 


                  <div className="form-group col-6 col-md-6">
                    
                           <label>Color: </label>
                           { colors.map( (color, index) => {
                             return (
                              <div className="mt-2" key={index}>
                                <input 
                                    className='form-control form-control-sm'
                                    type="text"
                                    placeholder="Enter Color"
                                    name="color"
                                    value={color.color}
                                    onChange={ event => handleChangeColorInput(index, event)} />
                                
                                <button class="btn btn-sm btn-danger"  onClick={event => handleRemoveColorFields(index)}>
                                  <i class="far fa-minus-square"></i>
                                </button>{' '}

                                <button class="btn btn-sm btn-success" onClick={handleAddColorFields}>
                                  <i class="far fa-plus-square"></i>
                                </button>
                            </div>
                             );
                           })
                           }
                            
                               
                                
                  </div>

                  <div className="form-group col-6 col-md-6">
                      <label>Size: </label>
                      {sizes.map((size, index) => {
                        return (
                          <div className="mt-2" key={index}>
                          <input 
                          className='form-control form-control-sm'
                          type="text"
                          value={size.size}
                          name="size"
                          placeholder="Enter Size" 
                          onChange={event => handleChangeSizeInput(index, event)}/>
                            
                                    <button class="btn btn-sm btn-danger" onClick={(event)=> handleRemoveSizeFields(index, event)}>
                                      <i class="far fa-minus-square"></i>
                                    </button>{' '}
                                    <button class="btn btn-sm btn-success" onClick={ handleAddSizeFields}>
                                      <i class="far fa-plus-square"></i>
                                    </button>
                            </div>
                        )
                      })}
                     
                  </div>
                  
                  <div className="form-check">
                      <input type="checkbox" 
                          className="form-check-input" 
                          id="is_av"
                          onChange={handleIsAvailableChange} 
                          value={value.is_available}/>
                      <label className="form-check-label"
                             for="is_av"  
                             >Is Available</label>
                    </div>


                    <div className="form-group col-12">
                      <button type="submit" className="btn btn-sm btn-primary float-right"><i class="fas fa-plus-circle"></i> Add Product</button>
                    </div>
              </form>
    );
}

export default withCard(CategoryForm, 'Add New Product', 'card-info');
