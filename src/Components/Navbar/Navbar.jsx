const Navbar = () => {
  return (
    <div className="w-11/12 py-6 mx-auto flex items-center justify-between">
      <div>
        <img src="../../src/assets/logo.png" alt="" srcset="" />
      </div>
      <div className="flex gap-7 items-center">
        <ul className="md:flex md:items-center md:gap-6 hidden">
          <li className="font-bold text-base cursor-pointer">Home</li>
          <li className="font-bold text-base cursor-pointer">Fixture</li>
          <li className="font-bold text-base cursor-pointer">Teams</li>
          <li className="font-bold text-base cursor-pointer">Schedules</li>
        </ul>
        <button className="btn flex items-center font-bold text-base bg-white hover:bg-white"><span>0</span>Coin<img src="../../src/assets/coin.png" className="w-5" alt="" /></button>
      </div>
    </div>
  );
};

export default Navbar;