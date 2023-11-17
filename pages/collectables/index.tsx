import NavBar from "../../src/components/Navbar/Navbar";
import CollectablesDetails from "../../src/components/Collectables/Collectables";

const Collectables = () => {
  return (
    <div>
      <NavBar />
      <CollectablesDetails isUser={true} />
    </div>
  );
};

export default Collectables;
