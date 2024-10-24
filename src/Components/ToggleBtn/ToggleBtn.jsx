const ToggleBtn = () => {
  return (
    <div className=' w-11/12 mx-auto flex justify-between items-center mb-9'>
        <div>
          <h2 className='font-bold text-base'>Available Player</h2>
        </div>

        <div className='flex gap-0 border-2 rounded-lg'>
          <button className='btn h-full bg-yellow-400 rounded-r-none'>Available</button>
          <button className='btn rounded-l-none bg-white'>Selected (0)</button>
        </div>
    </div>
  );
};

export default ToggleBtn;