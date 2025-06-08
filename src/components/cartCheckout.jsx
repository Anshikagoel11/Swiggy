import { useSelector } from "react-redux";
import { IoMdHelpCircle } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";

export default function CartCheckoutPage() {
  const cartItems = useSelector((state) => state.cartSlicer.cartItems);

  // Calculate totals
  let bill = 0;
  cartItems.forEach(item => {
    bill += (item.defaultPrice || item.price || 0) * item.quantity;
  });

  const deliveryFee = Math.floor(Math.random() * 20 + 50);
  const gst = Math.floor(Math.random() * 40 + 100);
  const totalPay = Math.floor(bill / 100 + gst + deliveryFee);

  const lastItem = cartItems[cartItems.length - 1];

  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      {/* Header */}
      <div className="flex justify-between items-center border-b shadow-sm border-gray-200 px-[5%] py-3 bg-white">
        <div className="flex items-center gap-4">
          <img
            className="w-32 sm:w-36 md:w-40 h-10 object-contain"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2023/11/swiggy_logo-freelogovectors.net_.png"
            alt="Swiggy Logo"
          />
          <div className="text-black font-bold text-sm md:text-base">SECURE CHECKOUT</div>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
            <IoMdHelpCircle size={20} />
            <span>Help</span>
          </div>
          <div className="flex items-center gap-1 hover:text-orange-500 cursor-pointer">
            <MdAccountCircle size={20} />
            <span>Sign In</span>
          </div>
        </div>
      </div>

      {/* Main Checkout Layout */}
      <div className="flex flex-col md:flex-row justify-between px-[5%] py-8 gap-8">
        {/* Left Side Steps */}
        <div className="w-full md:w-[58%] space-y-6">
          {/* Account Step */}
          <div className="bg-white p-6 shadow-sm rounded">
            <h2 className="text-lg font-bold mb-1">Account</h2>
            <p className="text-gray-600 mb-4">
              To place your order now, log in to your existing account or sign up.
            </p>
            <div className="flex gap-4">
              <button className="border border-green-700 text-green-600 px-6 py-2 rounded font-semibold hover:bg-green-50">
                Have an account? LOG IN
              </button>
              <button className="bg-green-700 text-white px-6 py-2 rounded font-semibold hover:bg-green-800">
                New to Swiggy? SIGN UP
              </button>
            </div>
          </div>

          {/* Address Step */}
          <div className="bg-white p-6 shadow-sm rounded">
            <h2 className="text-lg font-bold">Delivery address</h2>
          </div>

          {/* Payment Step */}
          <div className="bg-white p-6 shadow-sm rounded">
            <h2 className="text-lg font-bold">Payment</h2>
          </div>
        </div>



        {/* Right Side Cart Summary */}
        {
            (cartItems.length>0) ?(
        
        <div className="w-full md:w-[38%] bg-white p-6 shadow-sm rounded space-y-4">
          {/* Last Added Item Image and Category */}
          {lastItem && (
            <div className="flex">
              <div >
                <img className="h-20 mr-6 object-cover rounded"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${lastItem.imageId}`}
                  alt="category"
                  
                />
              </div>
              <h3 className="font-bold text-lg mt-2">{lastItem.category}</h3>
            </div>
          )}

          {/* Cart Items */}
          <div className="divide-y">
            {cartItems.map((item) => (
              <div key={item.id} className="py-2 flex justify-between items-center text-sm">
                <span>{item.name} x <span className="text-orange-600">{item.quantity}</span></span>
                <span>₹{(item.defaultPrice || item.price || 0) * item.quantity / 100}</span>
              </div>
            ))}
          </div>

          {/* Bill Details */}
          <div className="text-sm space-y-2 pt-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Item Total</span>
              <span>₹{Math.floor(bill / 100)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GST & Other Charges</span>
              <span>₹{gst}</span>
            </div>
          </div>

          {/* Total To Pay */}
          <div className="border-t pt-3 flex justify-between font-bold text-lg">
            <span>TO PAY</span>
            <span>₹{totalPay}</span>
          </div>
        </div>
            ):(<div className="w-full md:w-[38%] bg-white p-6 shadow-sm rounded space-y-4 items-center flex justify-center text-orange-600">
                <h2>Your cart is feeling lonely. Add some deliciousness!</h2>
            </div>)}
      </div>
    </div>
  );
}
