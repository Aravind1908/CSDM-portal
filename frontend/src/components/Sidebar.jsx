import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  GraduationCap,
  Users,
  UserCircle,
  Settings,
  CalendarCheck,
  FileBarChart,
  FlaskConical,
  LogOut,
  Plus,
  LayoutDashboard,
} from "lucide-react";

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? "" : menu);
  };

  const linkClass =
    "flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-600 hover:text-white transition";
  const activeLinkClass = "bg-indigo-600 text-white";

  const getNavLinkClass = ({ isActive }) =>
    `${linkClass} ${isActive ? activeLinkClass : ""}`.trim();

  return (
    <aside className="w-64 bg-gray-900 text-gray-300 flex flex-col p-4 min-h-screen">
      {/* Logo/Header */}
      <div className="mb-8 flex items-center gap-3">
        <LayoutDashboard className="text-indigo-500" size={32} />
        <span className="text-2xl font-bold text-white">
          CSDM<span className="text-indigo-500">Panel</span>
        </span>
      </div>

      {/* Home */}
      <NavLink to="/" className={getNavLinkClass}>
        <Home size={20} /> Home
      </NavLink>

      {/* Students Dropdown */}
      <div className="mt-2">
        <button
          onClick={() => toggleDropdown("students")}
          className={`${linkClass} w-full`}
        >
          <GraduationCap size={20} /> Student Details
        </button>
        <AnimatePresence>
          {openDropdown === "students" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-6 flex flex-col gap-2 mt-2 overflow-hidden"
            >
              <NavLink to="/students/bca" className={getNavLinkClass}>
                <Users size={18} /> BCA
              </NavLink>
              <NavLink to="/students/cs" className={getNavLinkClass}>
                <Users size={18} /> CS
              </NavLink>
              <NavLink to="/students/ct" className={getNavLinkClass}>
                <Users size={18} /> CT
              </NavLink>
              <NavLink to="/students/it" className={getNavLinkClass}>
                <Users size={18} /> IT
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Specialization */}
      <div className="mt-2">
        <button
          onClick={() => toggleDropdown("specialization")}
          className={`${linkClass} w-full`}
        >
          <Settings size={20} /> Specialization
        </button>
        <AnimatePresence>
          {openDropdown === "specialization" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-6 flex flex-col gap-2 mt-2 overflow-hidden"
            >
              <NavLink to="/specialization/add" className={getNavLinkClass}>
                <Plus size={18} /> Add Specialization
              </NavLink>
              <NavLink to="/specialization/manage" className={getNavLinkClass}>
                <Settings size={18} /> Manage Specializations
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Attendance */}
      <div className="mt-2">
        <button
          onClick={() => toggleDropdown("attendance")}
          className={`${linkClass} w-full`}
        >
          <CalendarCheck size={20} /> Attendance
        </button>
        <AnimatePresence>
          {openDropdown === "attendance" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-6 flex flex-col gap-2 mt-2 overflow-hidden"
            >
              <NavLink to="/attendance/mark" className={getNavLinkClass}>
                <CalendarCheck size={18} /> Mark Attendance
              </NavLink>
              <NavLink to="/attendance/report" className={getNavLinkClass}>
                <FileBarChart size={18} /> Attendance Report
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Test */}
      <div className="mt-2">
        <button
          onClick={() => toggleDropdown("test")}
          className={`${linkClass} w-full`}
        >
          <FlaskConical size={20} /> Test
        </button>
        <AnimatePresence>
          {openDropdown === "test" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-6 flex flex-col gap-2 mt-2 overflow-hidden"
            >
              <NavLink to="/test/schedule" className={getNavLinkClass}>
                <CalendarCheck size={18} /> Schedule Test
              </NavLink>
              <NavLink to="/test/results" className={getNavLinkClass}>
                <FileBarChart size={18} /> View Results
              </NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Logout */}
      <button className={`${linkClass} mt-auto`}>
        <LogOut size={20} /> Log out
      </button>
    </aside>
  );
}

export default Sidebar;
