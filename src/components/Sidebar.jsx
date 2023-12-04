import { CgUserlane } from 'react-icons/cg';

const Sidebar = () => {
    return <nav className="sidebar">
        <div className='logo'>
            <CgUserlane />
            <p>Recipe App</p>
        </div>
        <ul>
            <li>Search Field</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
            <li>Settings</li>
        </ul>
    </nav>;
};

export default Sidebar;
