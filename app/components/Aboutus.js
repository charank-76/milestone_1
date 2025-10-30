"use client"

function Aboutus() {
    return(
         <div className="bg-gray-950 text-white px-16 py-12 font-sans border-2 border-gray-500  h-[380px]">
      <div className="flex justify-between border-b border-gray-700 pb-8">
       
        <div className="w-1/4 border-r border-gray-700 ">
          <h2 className="text-2xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Continued at zealously necessary is Surrounded sir motionless she
            end literature. Gay direction neglected.
          </p>

          <div className="flex space-x-4">
            <div className="bg-green-950 p-3 rounded-sm"></div>
            <div className="bg-green-950 p-3 rounded-sm"></div>
            <div className="bg-green-950 p-3 rounded-sm"></div>
            <div className="bg-green-950 p-3 rounded-sm"></div>
          </div>
        </div>

       
        <div className="w-1/4 ml-[50px]">
          <h2 className="text-2xl font-semibold mb-6">Explore</h2>
          <ul className="space-y-3 text-gray-400">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-1/4 ml-[-80px]">
          <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
          <div className="space-y-4 text-gray-400">
            <div className="flex  space-x-3">
              <div className="bg-green-900 w-8 h-8 rounded"></div>
              <p>
                175 10h Street, Office 375 <br /> Berlin, De 21562
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-900 w-8 h-8 rounded"></div>
              <p>
                +123 34598768 <br /> +554 34598734
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-900 w-8 h-8 rounded"></div>
              <p>food@restan.com</p>
            </div>
          </div>
        </div>

       
        <div className="w-1/4">
          <h2 className="text-2xl font-semibold mb-6">Newsletter</h2>
          <p className="text-gray-400 mb-6">
            Join our subscribers list to get the latest news and special offers.
          </p>

          <div className="flex items-center border-b border-gray-500 pb-2 mb-4">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-transparent outline-none text-gray-300 w-full"
            />
            <p className="text-xl ">→</p>
          </div>

          <div className="flex items-center space-x-2">
           <p className="h-[15px] w-[15px] bg-amber-50"></p>
            <p className="text-gray-400 text-sm">
              I agree to the Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Aboutus