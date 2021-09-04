import React from 'react';

const CategoryForm = () => {
    return (
        <>
           {/* card starts here */}
           <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Create New Category</h3>
              </div>
              {/* card header */}
              {/* form starts here */}
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label >Category Name:</label>
                    <input type="text" className="form-control"  placeholder="Category Name" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Slug</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <textarea className="form-control"></textarea>
                  </div>

                  <div className="form-group">
                    <label for="exampleInputFile">Upload Image:</label>
                    <input type="file" className="form-control" />
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
