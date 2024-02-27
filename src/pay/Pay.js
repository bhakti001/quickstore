import React from 'react'
import { Link } from 'react-router-dom'

function Pay() {
  return (
    <div>
        <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center px-5 pb-10 pt-16">
    <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{maxWidth: "600px"}}>
        <div className="w-full pt-1 pb-5">
            <div className="bg-black text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
               <Link to='/'> <i className="mdi mdi-credit-card-outline text-3xl"></i></Link>
            </div>
        </div>
        <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment </h1>
        </div>
        <div className="mb-3 flex -mx-2">
            <div className="px-2">
                <label for="type1" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-500" name="type" id="type1" checked/>
                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"  alt='' className="h-8 ml-3"/>
                </label>
            </div>
            <div className="px-2">
                <label for="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-gray-500" name="type" id="type2"/>
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt='' className="h-8 ml-3"/>
                </label>
            </div>
                    </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="Your Name" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
        
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="0000 0000 0000 ****" type="text"/>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
            
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors cursor-pointer">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                </select>
            </div>
        </div>
        <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors" placeholder="0**" type="text"/>
            </div>
        </div>
        <div>
          <Link to='/succe'>  <button className="bg-primeColor  text-lg font-bodyFont h-[50px] hover:bg-black duration-300  block w-full max-w-xs mx-auto  focus:bg-gray-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button> </Link>
        </div>
    </div>
</div>

<div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <Link to='/' className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsp9RdFPu9b7fdkAhJyySdNcfw_pQmpvMK0snacV0&s"/>
        </Link>
    </div>
</div>
    </div>
  )
}

export default Pay