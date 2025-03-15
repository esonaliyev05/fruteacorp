import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../../Api/Beckend";
import { toast } from "react-toastify";

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/auth/getme`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response?.data?.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMe();
  }, [isChanged]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
    setIsChanged(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!isChanged || !userData) return;

    try {
      const updatedUserData = {
        firstName: editedData.firstName ?? userData.firstName,
        lastName: editedData.lastName ?? userData.lastName,
      };

      await axios.patch(`${BACKEND_URL}/users/self`, updatedUserData, {
        "Content-Type": "application/json",
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserData(updatedUserData);
      setEditedData({});
      setIsChanged(false);
      toast.success("Muvaffaqiyatli yangilandi");
    } catch (error) {
      toast.error("Hatolik yuz berdi, keyinroq urinib ko'ring");
      console.error(
        "Register error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsChanged(false);
    }
  };

  const handleCancel = () => {
    setEditedData({});
    setIsChanged(false);
  };

  const handleLogOut = () => {
    toast.success("Muvaffaqiyatli tizimdan chiqildi");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="w-full">
      <div className="w-full border-[0.8px] border-green-400 p-8 rounded-[4px]">
        <h2 className="font-inter text-[24px] font-medium">Ma'lumotlarim</h2>
        <form className="space-y-4 p-4" onSubmit={handleSave}>
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Familiya <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={editedData.lastName ?? userData?.lastName ?? ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none border-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Ism <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={editedData.firstName ?? userData?.firstName ?? ""}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md focus:outline-none border-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Telefon raqami
            </label>
            <input
              type="text"
              disabled
              className="mt-1 p-2 block w-full border border-green-400 rounded-md bg-green-200"
              value={`+${userData?.phone ?? ""}`}
            />
          </div>

          {isChanged && (
            <div className="flex space-x-4 mt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md"
              >
                Saqlash
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
              >
                Bekor qilish
              </button>
            </div>
          )}
        </form>
        <button
          className="mt-4 text-red-500 cursor-pointer"
          onClick={handleLogOut}
        >
          Tizimdan chiqish
        </button>
      </div>
    </div>
  );
};

export default UserSettings;
