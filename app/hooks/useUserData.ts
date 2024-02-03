import { User } from "@prisma/client";
import { useEffect, useState } from "react";

const useUserData = (currentUser: User | null) => {
  const [userData, setUserData] = useState<{
    name: string | null;
    university: string | null;
    teacher: string | null;
    grade: string | null;
    reasonText: string | null;
    date: string | null;
    time: string | null;
    lesson: string | null;
    id: string | null;
    mail: string | null;
    number: string | null;
  }>({
    name: null,
    university: null,
    teacher: null,
    grade: null,
    reasonText: null,
    date: null,
    time: null,
    lesson: null,
    id: null,
    mail: null,
    number: null,
  });

  useEffect(() => {
    if (currentUser) {
      setUserData({
        name: currentUser.name,
        university: currentUser.university,
        teacher: currentUser.teacher,
        grade: currentUser.grade,
        reasonText: currentUser.reasonText,
        date: currentUser.date,
        time: currentUser.time,
        lesson: currentUser.lesson,
        id: currentUser.id,
        mail: currentUser.mail,
        number: currentUser.number,
      });
    }
  }, [currentUser]);

  const updateUserData = (field: string, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return { userData, updateUserData };
};

export default useUserData;
