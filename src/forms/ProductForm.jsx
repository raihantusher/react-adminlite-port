import React from 'react';

const CategoryForm = () => {
    return (
        <>
           {/* card starts here */}
           <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add New Product</h3>
              </div>
              {/* card header */}
              {/* form starts here */}
              <form>
                <div className="card-body">
                  
                  <div className="form-group">
                    <label for="exampleInputEmail1">Product Name</label>
                    <input type="text" className="form-control"  placeholder="Product Name" />
                  </div>

                  <div className="form-group">
                    <label >Slug</label>
                    <input type="text" className="form-control"  placeholder="Password" />
                  </div>

                  <div className="form-group">
                    <label >Description</label>
                    <textarea className="form-control"></textarea>
                  </div>

                  <div className="form-group">
                    <label >Price</label>
                    <input type="number" className="form-control"  placeholder="Password" />
                  </div>

                  <div className="form-group">
                        <label >Image: </label>
                        <input type="file" className="custom-file-input"  />
                  </div>
                 
                  <div className="form-group">
                    <label>Stock</label>
                    <input type="number" className="form-control"  placeholder="Password" />
                  </div>
                 

                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Is Available</label>
                  </div>

                  <div className="form-group">
                        <label>Select</label>
                        <select className="form-control">
                          <option>option 1</option>
                          <option>option 2</option>
                          <option>option 3</option>
                          <option>option 4</option>
                          <option>option 5</option>
                        </select>
                    </div>

                </div>
                { /* -- /.card-body - */ }

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            {/* card finished here*/}  
        </>
    );
}

export default CategoryForm;
