import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center text-4xl py-4 shadow-lg sticky top-0 backdrop-blur-md z-50">
        User Verse
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
