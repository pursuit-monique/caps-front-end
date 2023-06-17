import React, { useEffect } from "react";
import * as bootstrap from "bootstrap";

import { iconList, cause } from "./helpers/objects";

export default function Categories({ category, setCategory, setMarkerId }) {
  const handleClick = (event) => {
    // Category Selection Handler.
    setCategory({ cause: event.target.id, id: event.target.dataset.value });
  };

  const handleReset = (event) => {
    // Category Selection Handler.
    setCategory("");
    setMarkerId();
  };

  const chkItem = (category, currID, iconList, cause) => {
    let icon =
      Number(category.id) === currID
        ? iconList[currID][1]
        : iconList[currID][0];
    return (
      <img
        src={icon}
        fill={cause[currID][1]}
        id={cause[currID][0]}
        alt={cause[currID][0]}
        data-value={currID}
        onClick={handleClick}
      />
    );
  };

  useEffect(() => {
    // Initialize tooltips on mount
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <>
      <div className="categories-bar">
        {/* Environmental */}
        <span className="icon-space">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Environmental"
          >
            {chkItem(category, 1, iconList, cause)}
          </span>
        </span>

        {/* Veteran */}
        <span className="icon-space">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Veteran"
          >
            {chkItem(category, 6, iconList, cause)}
          </span>
        </span>

        {/* Animal */}
        <span className="icon-space">
          <span data-bs-toggle="tooltip" data-bs-placement="top" title="Animal">
            {chkItem(category, 3, iconList, cause)}
          </span>
        </span>

        {/* Education */}
        <span className="icon-space">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Education"
          >
            {chkItem(category, 2, iconList, cause)}
          </span>
        </span>

        {/* Disability */}
        <span className="icon-space">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Disability"
          >
            {chkItem(category, 5, iconList, cause)}
          </span>
        </span>

        {/* Justice */}
        <span className="icon-space">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Justice"
          >
            {chkItem(category, 4, iconList, cause)}
          </span>
        </span>

        {/* Mental */}
        <span className="icon-space">
          <span data-bs-toggle="tooltip" data-bs-placement="top" title="Mental">
            {chkItem(category, 7, iconList, cause)}
          </span>
        </span>
      </div>
      <button className="button" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
