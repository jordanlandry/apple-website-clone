import properties from "../properties";
import { CardSmallType } from "./interfaces";

const frontPageSmallIcons: CardSmallType[] = [
  {
    heading: "Give WOW.",
    subheading: "This holiday season, find the perfect gift for everyone on your list.",
    backgroundImages: {
      small: "https://www.apple.com/v/home/aw/images/promos/holiday-2022/set-b/promo__sw58lbodkmqq_small.jpg",
      medium: "https://www.apple.com/v/home/aw/images/promos/holiday-2022/set-b/promo__sw58lbodkmqq_medium.jpg",
      large: "https://www.apple.com/v/home/aw/images/promos/holiday-2022/set-b/promo__sw58lbodkmqq_large.jpg",
    },
    links: [
      {
        title: "Shop the gift guide",
        url: "/shop/gifts",
      },
    ],
    headingColor: "white",
    className: "card-small--emoji",
  },
  {
    heading: "iPhone 14 Pro",
    subheading: "Pro. Beyond",
    backgroundImages: {
      small: "https://www.apple.com/v/home/aw/images/promos/iphone-14-pro/promo_iphone14pro__4n4twj56fzmu_small.jpg",
      medium: "https://www.apple.com/v/home/aw/images/promos/iphone-14-pro/promo_iphone14pro__4n4twj56fzmu_medium.jpg",
      large: "https://www.apple.com/v/home/aw/images/promos/iphone-14-pro/promo_iphone14pro__4n4twj56fzmu_large.jpg",
    },
    links: [
      {
        title: "Learn more",
        url: properties.basePath + "/iphone-14-pro",
      },
      {
        title: "Buy",
        url: "/shop/iphone-14-pro",
      },
    ],
    headingColor: "white",
  },
  {
    heading: "iPad",
    subheading: "Lovable. Drawable. Magical.",
    backgroundImages: {
      small: "https://www.apple.com/v/home/aw/images/promos/ipad/promo_ipad__fioegapg12qi_small.jpg",
      medium: "https://www.apple.com/v/home/aw/images/promos/ipad/promo_ipad__fioegapg12qi_medium.jpg",
      large: "https://www.apple.com/v/home/aw/images/promos/ipad/promo_ipad__fioegapg12qi_large.jpg",
    },
    links: [
      {
        title: "Learn more",
        url: "/ipad",
      },
      {
        title: "Buy",
        url: "/shop/ipad",
      },
    ],
    headingColor: "black",
  },
  {
    heading: "AirPods",
    subheading: "Share the joy.",
    backgroundImages: {
      small:
        "https://www.apple.com/v/home/aw/images/promos/airpods-holiday-2022/promo_airpods_holiday__fqg7rt8b4vma_small.jpg",
      medium:
        "https://www.apple.com/v/home/aw/images/promos/airpods-holiday-2022/promo_airpods_holiday__fqg7rt8b4vma_medium.jpg",
      large:
        "https://www.apple.com/v/home/aw/images/promos/airpods-holiday-2022/promo_airpods_holiday__fqg7rt8b4vma_large.jpg",
    },
    links: [
      {
        title: "Shop",
        url: "/shop/airpods",
      },
    ],
    headingColor: "black",
    className: "card-small--airpods",
  },
  {
    heading: "",
    subheading: "A healthy leap ahead.",
    backgroundImages: {
      small:
        "https://www.apple.com/v/home/aw/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_small.jpg",
      medium:
        "https://www.apple.com/v/home/aw/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_medium.jpg",
      large:
        "https://www.apple.com/v/home/aw/images/promos/apple-watch-series-8/promo_apple_watch_series_8__ch7rexplmihe_large.jpg",
    },
    links: [
      {
        title: "Learn more",
        url: "/apple-watch-series-8",
      },
      {
        title: "Buy",
        url: "/shop/apple-watch-series-8",
      },
    ],
    headingColor: "white",
    className: "small-card--watch--content",
  },
  {
    heading: "iPad Pro",
    subheading: "Supercharged by",
    backgroundImages: {
      small: "https://www.apple.com/v/home/aw/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_small.jpg",
      medium: "https://www.apple.com/v/home/aw/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_medium.jpg",
      large: "https://www.apple.com/v/home/aw/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_large.jpg",
    },
    links: [
      {
        title: "Learn more",
        url: "/ipad-pro",
      },
      {
        title: "Buy",
        url: "/shop/ipad-pro",
      },
    ],
    headingColor: "white",
    className: "small-card--ipad-pro",
  },
];

export default frontPageSmallIcons;
