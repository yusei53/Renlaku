import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const useUserData = (currentUser: User | null) => {
  const [userData, setUserData] = useState<{
    name: string | null;
    university: string | null;
    teacher: string | null;
    grade: string | null;
  }>({
    name: null,
    university: null,
    teacher: null,
    grade: null,
  });

  useEffect(() => {
    if (currentUser) {
      setUserData({
        name: currentUser.name,
        university: currentUser.university,
        teacher: currentUser.teacher,
        grade: currentUser.grade,
      });
    }
  }, [currentUser]);

  const updateUserData = (field: string, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return { userData, updateUserData };
};

export default useUserData;
