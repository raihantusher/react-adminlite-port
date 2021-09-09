import React from 'react';
import withCard from '../hoc/withCard';
const ProductList = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Product Name</th>
                </tr>

                <tr>
                    <td> hello</td>
                </tr>
            
                    
                

            </table>
        </div>
    );
}

export default withCard(ProductList, "Product List");
