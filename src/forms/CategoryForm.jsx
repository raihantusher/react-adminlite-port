import React, { useState } from 'react';
import swal from '@sweetalert/with-react';
import style from '../FileUpload.module.css';
const CategoryForm = () => {
    const [value, setValue] = useState({
      'category_name':'',
      'slug':'',
      'description' :'',
      'image' : null
    });
    const [file, setUrl] = useState('https://icon-library.com/images/upload-photo-icon/upload-photo-icon-21.jpg')

    const handleCatChange = (e) => { setValue( {...value, category_name :e.target.value});}
    const handleSlugChange = (e) => { setValue( {...value, slug         :e.target.value});}
    const handleDesChange = (e) => { setValue( {...value, description   :e.target.value});}
    const handleImgChange = (e) => { setValue( {...value, image         :e.target.files[0] });
      setUrl(URL.createObjectURL(e.target.files[0]));
    }
    

    const handleFormSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append( 'category_name', value.category_name)
      formData.append( 'slug', value.slug)
      formData.append( 'description', value.description)
      formData.append( 'cat_image', value.image, value.image.name)
      
      fetch('http://localhost:8000/api/store/category-list/', {
          method: 'POST',
          mode: 'cors',
          headers: {
            
          },
          body: formData
      })
      .then(response => response.json())
      .then((data) => {
          //  this.setToken(data.token);
          // console.log(this.getToken())
          console.log(data)
          swal("Success Message!", `Category ${data.category_name} added successfully.`, "success")
      
          //this.setState({isLoggedIn:true})
      });

      console.log(value);
    }

    return (
        <>
        <form onSubmit={handleFormSubmit}>
           {/* card starts here */}
           <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Create New Category</h3>
              </div>
              {/* card header */}
              {/* form starts here */}
             
                <div className="card-body">
                  
                      <div className="form-group">
                        <label >Category Name:</label>
                        <input type="text" className="form-control"  placeholder="Category Name" onChange={handleCatChange} name="category_name" value={value.category_name}/>
                      </div>
                      <div className="form-group">
                        <label>Slug</label>
                        <input type="text" className="form-control" placeholder="slug" onChange={handleSlugChange} name="slug" value={value.slug} />
                      </div>

                      <div className="form-group">
                        <label >Description</label>
                        <textarea className="form-control" onChange={handleDesChange} name="description" value={value.description}></textarea>
                      </div>
                      
                      <div className="form-group">
                        <label className={style.fileUpload}>
                              <img src={file} height="150px" width="150px"/>
                              <input type="file" onChange={handleImgChange} name="image" className={style.upload} />
                          </label>
                      </div>
                    
                </div>
                  
                { /* -- /.card-body - */ }

                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            </form>
            {/* card finished here*/}  
        </>
    );
}

export default CategoryForm;
