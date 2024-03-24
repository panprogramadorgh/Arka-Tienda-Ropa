import { Review } from "@/utils/review";
import { useEffect, useState } from "react";

export default function useFetchReviews() {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const fetchReviews = async () => {
    const response = await fetch("/api/reviews.json");
    const data = await response.json();
    setReviews(data);
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  return reviews;
}
