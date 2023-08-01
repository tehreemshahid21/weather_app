import React from "react";
import { BsUmbrella } from "react-icons/bs";
import { TiWeatherPartlySunny, TiThListOutline } from "react-icons/ti";
import { IoIosMap } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Change = (evel) => {
    if (evel === "Weather") {
      navigate("/");
    }
    else if (evel === "Cities") {
      navigate("/cities");
    }
    else if (evel === "Forecast") {
      navigate("/forecast");
    }
  };
  const menu = [
    { name: "Weather", link: "/", icon: TiWeatherPartlySunny },
    { name: "Cities", link: "/cities", icon: TiThListOutline },
    { name: "Map", link: "/", icon: IoIosMap },
    { name: "Forecast", link: "/forecast", icon: FiSettings },
  ];
  return (
    <>
      <section className="flex gap-6">
        <div
          className={
            "bg-slate-600 min-h-screen w-62 duration-500 text-gray-100 px-4"
          }
        >
          <div className="py-3 flex justify-end">
            <BsUmbrella size={25} className="cursor-pointer m-10" />
          </div>
          <div className="mt-3 flex flex-col gap-4 realtive">
            {menu?.map((menu, e) => (
              <Link
                to={menu?.link}
                key={e}
                className="flex items-center text-xs gap-3.5 fond font-medium p-4 hover:bg-slate-400 rounded-md"
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2 onClick={Change(menu?.name)}>{menu?.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
