import { Link } from "react-router-dom";
import { useAuth } from "../../auth/authContext";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { Offline, Online } from "react-detect-offline";

const ProfileBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const content = (
    <div className="min-w-52 flex flex-col gap-2">
      <p
        className="flex items-center gap-2 hover:bg-gray-50 hover:font-normal hover:text-green-600"
        onClick={() => logout()}
      >
        <LogoutOutlined />
        Logout
      </p>
      <Link to="/settings">
        <p className="flex items-center gap-2 hover:bg-gray-50 hover:font-normal hover:text-green-600">
          <SettingOutlined />
          Settings
        </p>
      </Link>
    </div>
  );
  return (
    <div className="  w-full h-[3.7rem] flex justify-between pt-3 px-8">
      <div></div>
      <div>
        {" "}
        {isAuthenticated && (
          <Popover content={content}>
            <section className="flex  justify-center items-center gap-2 ">
              <div className="relative">
                <div
                  className="w-10 h-10 cursor-pointer flex items-center justify-center bg-blue-50 rounded-full hover:bg-green-100 transition font-semibold text-sm text-gray-800"
                  title="Click to logout"
                >
                  SW
                </div>
                <Online>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500 animate-blink border border-white" />
                </Online>
                <Offline>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border border-white" />
                </Offline>
              </div>

              <div className="w-full flex flex-col gap-1">
                <h1 className="text-xs font-semibold">Samuel Wakumelo</h1>
                <h1 className="text-[10px] text-gray-500">
                  samuelwaku1st@gmail.com
                </h1>
              </div>
            </section>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default ProfileBar;
