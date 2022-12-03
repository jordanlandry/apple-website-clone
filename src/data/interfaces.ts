export interface BackgroundImageType {
  small: string;
  medium: string;
  large: string;
}

export interface CardType {
  id: number;
  heading: string;
  subheading: string;
  backgroundImages: BackgroundImageType;
}

// Props
