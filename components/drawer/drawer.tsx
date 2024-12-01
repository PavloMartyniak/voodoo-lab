import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = "right",
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  const placementVariants = {
    hidden: {
      x: placement === "left" ? "-100%" : placement === "right" ? "100%" : 0,
      y: placement === "top" ? "-100%" : placement === "bottom" ? "100%" : 0,
    },
    visible: {
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const sizeClasses = {
    left: "h-full w-64",
    right: "h-full w-64",
    top: "w-full h-64",
    bottom: "w-full h-64",
  };

  return createPortal(
    isOpen ? (
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={drawerRef}
          className={`fixed bg-white shadow-lg ${sizeClasses[placement]} p-4`}
          variants={placementVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ×
          </button>
          {children}
        </motion.div>
      </motion.div>
    ) : null,
    document.body
  );
};

export default Drawer;
