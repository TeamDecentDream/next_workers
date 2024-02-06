import { FC, useEffect, useState } from "react";

const TopButton: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 160) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button onClick={scrollToTop} className="fixed right-[5%] bottom-[30%]">
          <div className="text-black text-2xl border-b-2 border-darkGreen">
            TOP
          </div>
        </button>
      )}
    </div>
  );
};

export default TopButton;
