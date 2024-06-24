import CreateUser from "../features/users/CreateUser.jsx";

function Home() {
  return (
    <div className='my-10 sm:my-20 text-center px-4'>
      <h1 className='text-xl text-stone-700 font-semibold mb-8 md:text-3xl'>
        The best pizza.
        <br />
          <span className='text-yellow-500'>
        Straight out of the oven, straight to you.
          </span>
      </h1>
        <CreateUser/>
    </div>
  );
}

export default Home;
