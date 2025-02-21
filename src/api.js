import axios from "axios";

const API_URL = "http://localhost:8000/api/tenders";

// ✅ Fetch tenders with filters
export const fetchTenders = async (filters = {}) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching tenders:", error);
    return [];
  }
};
