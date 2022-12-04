export interface BackgroundImageType {
  small: string;
  medium: string;
  large: string;
}

export interface CardType {
  backgroundImages: BackgroundImageType;
}

// Props
export interface CardTypeProps extends CardType {
  children?: React.ReactNode;
  className?: string;
}

export interface IconProps {
  className?: string;
  size?: number;
  color?: string;

  // Style
  margin?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}
