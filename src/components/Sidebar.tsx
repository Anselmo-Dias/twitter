import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarksSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoTwitterImg from '../assets/logo-twitter.svg'
import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={logoTwitterImg} alt="logo-twitter" />

      <nav className="main-navigation">
        <NavLink to="/home">
          {' '}
          <House weight="fill" /> <span>Home</span>
        </NavLink>
        <a href="/Explore">
          {' '}
          <Hash /> <span>Explore</span>
        </a>
        <a href="/Notifications">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="/Messages">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="/Bookmarks">
          <BookmarksSimple />
          <span>Bookmarks</span>
        </a>
        <a href="/Lists">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="/Profile">
          <User />
          <span>Profile</span>
        </a>
        <a href="/More">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}
