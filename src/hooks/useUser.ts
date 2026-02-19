import { useCallback, useState } from "react";
import api from "../api/axios";

export const useUser = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [profilePictureUrl, setProfilePictureUrl] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const fetchUser = useCallback(async () => {
    try {
      const res = await api.get("/users/me", { withCredentials: true });

      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setProfilePictureUrl(res.data.profilePictureUrl);
      setRole(res.data.role);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    firstName,
    lastName,
    profilePictureUrl,
    role,
    fetchUser,
  };
};
