export default async function handler(req, res) {
  const swiggyUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6183666&lng=85.0999572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  
  try {
    const response = await fetch(swiggyUrl, {
          headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36",
          "Accept": "application/json",
          "Referer": "https://www.swiggy.com/",
          },
      });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data from Swiggy API" });
    }
  
    const jsonData = await response.json();
  
    const restaurantArray = jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
    return res.status(200).json({
      data: Array.isArray(restaurantArray) ? restaurantArray : [],
    });
  
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
  