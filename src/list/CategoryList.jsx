import React, { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react';
import withCard from '../hoc/withCard';

import {
    
    Link,
  } from "react-router-dom";



const CategoryList = () => {
    const [state, setState] = useState([]);

    const deleteCat =  id =>  e => {
      
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:8000/api/store/category-detail/${id}/`, {
                    method: 'DELETE',
                })
            
                .then( () => {
                    console.log()
                
                    let temp = state;
                    temp = temp.filter(cat => cat.id !== id);
                    swal("Success Message!", `Ca.`, "success")
                    setState(temp);
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                });
              
            } else {
              swal("Your imaginary file is safe!");
            }
          });


        
    }

    useEffect(() => {
     
        
         fetch('http://localhost:8000/api/store/category-list/', {
            method: 'GET',
            mode: 'cors',
            headers: {
        
            },
        })
        .then(response => response.json())
        .then((data) => {
            //  this.setToken(data.token);
            // console.log(this.getToken())
            console.log(data)
            setState(data);
        
            //this.setState({isLoggedIn:true})
        });
    },[]);

    return (
        <div>
            <table className="table table-responsive">
                <tr>
                    <th>Category Name</th>
                    <th>Slug</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
                {state.map(cat => {
                        return (<tr>
                            <td>{cat.category_name}</td>
                            <td>{cat.slug}</td>
                            <td>{cat.description}</td>
                            <td><img className="img-responsive" style={{ height: '50px', width:'50px'}}src={cat.cat_image}/></td>
                            <td>
                                <Link to={`categories/${cat.id}/edit`} >
                                    <button type="button" class="btn btn-sm btn-info"><i class="far fa-edit"></i></button>
                                </Link>
                                {' '}<button type="button" class="btn btn-sm btn-danger" onClick={deleteCat(cat.id)}><i class="far fa-trash-alt"></i></button></td>
                        </tr>)
                        }
                )}
                

            </table>
        </div>
    );
}

export default withCard(CategoryList, "Category List", "card-success");
