import "./Footer.css"
const Footer = () => {
  return (
    <div className="bg-[#06091A] text-white flex flex-col items-center justify-center gap-7 mt-72 lg:mt-56">
      {/* newsletter section */}
      <div className="p-2 rounded-xl border-2 border-white bg-transparent w-11/12 mx-auto lg:-mt-40 -mt-52">
        <div className="bg-slate-100 text-black rounded-xl">
          <div className="footer text-center flex flex-col items-center justify-center gap-4 py-20 rounded-xl">
            <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
            <p className="font-bold text-base">Get the latest updates and news right in your inbox!</p>
            <div className="flex gap-2 items-center w-[90%] lg:w-[35%]">
            <input type="email" placeholder="Enter your email:" className="bg-white border-2 text-black text-base px-2 py-2.5 rounded-md w-[85%]"/>
            <button className="btn bg-gradient-to-bl from-yellow-400 to-blue-300">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      {/* logo */}
      <div>
        <img src="../../src/assets/logo-footer.png" alt="" />
      </div>
      {/* Inportant links */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-9">
        <div className="">
          <h2 className="font-bold text-xl mb-4">About us</h2>
          <p className="font-semibold text-sm">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4">Quick Links</h2>
          <ul className="list-disc ml-5">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Subscribe</h1>
          <p className="font-semibold text-base">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
          <input type="email" placeholder="Enter your email:" className="bg-white border-2 border-r-0 text-black text-base p-2 rounded-md w-[85%] rounded-r-none"/>
          <button className="btn rounded-l-none bg-gradient-to-bl from-yellow-400 to-blue-300">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="w-full mt-8"/>
      <div>
        <h2 className="font-bold text-sm mb-5">@2025 Shazzad Maruf All Rights Reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;