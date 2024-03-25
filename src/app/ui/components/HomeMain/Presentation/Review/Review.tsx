/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Image from "next/image";

// libs

// utils
import starOutline from "@/app/ui/icons/starOutline.svg";
import star from "@/app/ui/icons/star.svg";
import useFetchReviews from "@/app/ui/hooks/Generic/useFetchReviews";

// types & interfaces

// css
import styles from "@/app/ui/components/HomeMain/Presentation/Review/Review.module.css";

interface Props {}

const Review: FC<Props> = ({}) => {
  const reviews = useFetchReviews();
  if (reviews === null) return null;
  return (
    <div className={styles.review}>
      <p className={styles.name}>{reviews[0].name}</p>
      <p className={styles.review}>{reviews[0].review}</p>
      <div className={styles["stars-container"]}>
        {new Array(reviews[0].stars).fill(null).map(() => {
          return <Image src={star} alt="review star" />;
        })}
        {new Array(5 - reviews[0].stars).fill(null).map(() => {
          return <Image src={starOutline} alt="review outlined star" />;
        })}
      </div>
    </div>
  );
};

export default Review;
