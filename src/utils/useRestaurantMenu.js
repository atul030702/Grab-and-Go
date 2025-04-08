import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
              const data = await fetch(`/api/getMenu?resId=${resId}`);
              const response = await data.json();
              setResInfo(response?.data);

            } catch (error) {
              console.error("Error fetching menu:", error);
            }
        };

        fetchMenu();

    }, [resId]);

    return resInfo;
};

export default useRestaurantMenu;