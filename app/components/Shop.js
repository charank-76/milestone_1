"use client"

function Shop({ image, category, name, price }) {
    return(
        <div className="bg-white shadow-lg rounded-2xl w-[250px] flex flex-col items-center justify-between p-5">
        <div className="relative">
          <span className="absolute top-0 left-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
            SALE!
          </span>
       <img src={image}  className="w-40 h-40 object-contain mx-auto" />
      </div>
      <div className="text-center mt-3">
        <p className="text-sm text-gray-500 ">{category}</p>
        <h3 className="font-semibold hover:text-yellow-600 text-black text-lg">{name}</h3>
         <div className="flex items-center justify-center gap-2 mt-1"></div>
         <div className="text-lg font-semibold text-[#6c4b26]">${price}</div>
        </div>
      <button className="border border-yellow-600 rounded-full text-black px-4 py-2 mt-4 hover:bg-yellow-700 hover:text-white "  onClick={(e)=>{alert(`${name} added to cart`)}}>
        ADD TO CART
      </button>
        </div>
    )
}
export default Shop