import React from "react";
import axios from "axios";

export default function TapButton({ userId }) {
  const handleTap = async () => {
    try {
      const res = await axios.post(`${API_URL}/tap`, { userId });
      alert(`You earned ${res.data.earned} coins! Balance: ${res.data.balance}`);
      if (window.TL && window.TL.showAd) window.TL.showAd();
    } catch (err) {
      alert(err.response?.data?.msg || "Error tapping coins");
    }
  };
  return <button onClick={handleTap}>Tap to Earn Coins</button>;
}
