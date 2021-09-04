import React from 'react';

const VariationForm = () => {
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
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="exampleInputFile" />
                        <label className="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
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

export default VariationForm;
