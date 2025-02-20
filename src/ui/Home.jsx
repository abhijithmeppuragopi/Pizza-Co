import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center py-8 my-14 ">
      <h1 className="text-xl md:text-3xl font-bold  text-yellow-500 pb-6">
        The best pizza &#127829;
        </h1>
        <h1 className="text-xl md:text-3xl font-bold text-stone-800 pb-12">
        Straight out of the oven, straight to you.
        </h1>
      
      <CreateUser/>
    </div>
  );
}

export default Home;
