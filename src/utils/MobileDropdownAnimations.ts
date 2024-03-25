export const dropIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 700,
    },
  },
  exit: { opacity: 0, scale: 0.9, y: 20 },
};

export const dropInMobile = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.15,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.15,
    },
  },
};
