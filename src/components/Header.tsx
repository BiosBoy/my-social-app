import NavBar from "@/components/NavBar";
import AddPostModal from "@/components/AddPostModal";

const Header = () => {
  return (
    <div className="header">
      <AddPostModal />
      <NavBar />
    </div>
  );
};

export default Header;
