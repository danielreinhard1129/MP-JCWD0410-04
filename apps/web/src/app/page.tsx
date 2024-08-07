import Category from "@/components/Category";
import Jumbotron from "@/components/Jumbotron";
import Searchbar from "@/components/Searchbar";

const page = () => {
  return (
    <div className="bg-white max-w-100% h-screen mt-10">
      <Searchbar/>
      <Jumbotron/>
      <Category />
    </div>
  );
};

export default page;
