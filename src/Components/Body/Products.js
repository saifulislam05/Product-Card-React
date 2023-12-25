import React from 'react'
import ProductItem from './ProductItem';
import ProductList from '../../Data/ProductList.json'

const Products = () => {
    return (
        <div className="w-full p-3 flex flex-col">

            <div className='flex flex-col gap-8'>
                {
                ProductList.map((data) => {
                  return  <ProductItem key={data.id} data={data} />
                })
            }
            </div>
            
      

        <div className="flex justify-between items-center w-full mt-6 py-3 border-t-2 border-gray-500">
          <p className="text-xl font-bold text-zinc-700">Total</p>
          <p className="text-xl font-bold text-primary">$4196</p>
        </div>
        <button className="btn btn-danger btn-sm w-fit mx-auto">Clear Cart</button>
      </div>
    );
}

export default Products