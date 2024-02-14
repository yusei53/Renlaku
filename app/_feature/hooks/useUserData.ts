import { useState, useEffect } from "react";

const useUserData = <T>(initialData: T, currentUser: T) => {
  const [userData, setUserData] = useState<T>(initialData);

  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);

  const updateUserData = (field: keyof T, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return { userData, updateUserData };
};

export default useUserData;
