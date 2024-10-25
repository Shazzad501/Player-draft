const Navbar = ({coin}) => {
  return (
    <div className="w-11/12 py-3 mx-auto flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg">
      <div>
        <img src="https://i.ibb.co.com/kSfJSdy/logo.png" alt=""/>
      </div>
      <div className="flex gap-7 items-center">
        <ul className="md:flex md:items-center md:gap-6 hidden">
          <li className="font-bold text-base cursor-pointer">Home</li>
          <li className="font-bold text-base cursor-pointer">Fixture</li>
          <li className="font-bold text-base cursor-pointer">Teams</li>
          <li className="font-bold text-base cursor-pointer">Schedules</li>
        </ul>
        <button className="btn flex items-center font-bold text-base bg-white hover:bg-white"><span>{coin}M</span><img src="https://i.ibb.co.com/NYrZk0L/coin.png" className="w-5" alt="" /></button>
      </div>
    </div>
  );
};

export default Navbar;