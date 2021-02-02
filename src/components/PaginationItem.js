import React from 'react';
import { Link } from "react-router-dom";

const PaginationItem = ({ isActive, to, children }) => {
  return (
    <li className={`page-item ${isActive ? "active" : ""}`}>
      <Link className="page-link" role="link"  to={to}>{children}</Link>
    </li>
  );
}

export default PaginationItem;