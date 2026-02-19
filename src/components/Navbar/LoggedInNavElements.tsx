import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { logoutUser } from "../../services/auth";

const LoggedInNavElements = () => {
  const { fetchUser, lastName, firstName, profilePictureUrl, role } = useUser();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const logout = () => {
    try {
      logoutUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Menu as="div" className="relative inline-block">
        <MenuButton className="flex items-center justify-center space-x-2 data-closed:border-none">
          <p className="text-sm">{`${firstName}, ${lastName}`}</p>
          {/* Profile picture */}
          <div data-dropdown-toggle={"dropdown"}>
            <img
              src={profilePictureUrl}
              alt=""
              className="size-12 rounded-full"
            />
          </div>
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white outline-1 -outline-offset-1 outline-neutral-300 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-black data-focus:bg-neutral-50 data-focus:outline-hidden"
              >
                Settings
              </a>
            </MenuItem>
            {role === "Admin" && (
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-black data-focus:bg-neutral-50 data-focus:outline-hidden"
                >
                  Admin Panel
                </a>
              </MenuItem>
            )}
            <form>
              <MenuItem>
                <button
                  onClick={() => logout()}
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 data-focus:bg-neutral-50 data-focus:outline-hidden"
                >
                  Sign out
                </button>
              </MenuItem>
            </form>
          </div>
        </MenuItems>
      </Menu>
    </>
  );
};
export default LoggedInNavElements;
