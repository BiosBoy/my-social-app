import NavBar from '@/components/NavBar'
import AddPostModal from '@/components/AddPostModal'

const Header = () => (
  <div className="header">
    <AddPostModal />
    <NavBar />
  </div>
)

export default Header
