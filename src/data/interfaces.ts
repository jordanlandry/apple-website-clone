interface link {
  title: string;
  url: string;
}

export interface BackgroundImageType {
  small: string;
  medium: string;
  large: string;
}

export interface CardType {
  backgroundImages: BackgroundImageType;
}

export interface CardSmallType extends CardType {
  heading?: string;
  subheading?: string;
  links?: link[];
  headingColor: string;
  className?: string;
}

// Props
export interface CardTypeProps extends CardType {
  children?: React.ReactNode;
  className?: string;
}

export interface CardSmallProps extends CardTypeProps, CardSmallType {
  before?: HTMLElement;
  after?: HTMLElement;
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
