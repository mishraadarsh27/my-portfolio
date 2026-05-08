import React, {useState, useEffect} from "react";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({x: e.clientX, y: e.clientY});
    };

    const handleMouseOver = e => {
      const target = e.target;
      const isClickable =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON";
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isPointer ? "pointer" : ""} ${
        isHidden ? "hidden" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
      <div className="cursor-tech-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Cursor;
