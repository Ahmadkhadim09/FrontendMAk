import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminLayout.css';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-logo">MAKDEVS Admin</div>
        <nav className="admin-nav">
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/projects">Projects</Link></li>
            <li><Link to="/admin/services">Services</Link></li>
            <li><Link to="/admin/testimonials">Testimonials</Link></li>
            <li><Link to="/admin/messages">Messages</Link></li>
            <li><Link to="/admin/users">Users</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
          </ul>
        </nav>
        <div className="admin-user">
          <span>Welcome, {user?.name || 'Admin'}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;