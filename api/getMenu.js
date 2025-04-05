export default async function handler(req, res) {
  const { resId } = req.query;
  
  if (!resId) {
    return res.status(400).json({ error: "Missing restaurant ID" });
  }
  
  const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6183666&lng=85.0999572&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
  
  try {
    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36",
        "Accept": "application/json",
        "Referer": "https://www.swiggy.com/",
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data from Swiggy API" });
    }
  
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}