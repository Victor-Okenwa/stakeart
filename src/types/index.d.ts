declare interface Notification {
  id: string;
  avatar?: string;
  message: string;
  isRead: boolean;
}

declare interface NotificationItemProps {
  notification: Notification;
}

declare interface Auction {
  id: string;
  avatar: string;
  name: string;
  auctioneer: string;
  date: string | Date;
  currentBid: number;
  minBid: number;
  yourBid: number;
}

declare interface CustomFormFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder?: string;
  label?: string;
  inputClassName?: ClassValue;
  isPasswordVisible?: boolean;
  defaultValue?: string | number;
  fieldType?: React.HTMLInputTypeAttribute;
  hidden?: boolean;
  disabled?: boolean;
}

declare interface CustomFormSelectProps
  extends Omit<CustomFormFieldProps, "isPasswordVisible"> {
  defaultOption?: string;
  options: string[];
}

declare interface LoaderProps {
  className?: string;
  type: "text" | "loader" | "all";
  size?: number;
}


// declare interface AuctionCardProps extends Auction { }
declare interface PlaceBidProps {
  minBid: number;
  topBid: number;
  userBid?: number;
}

declare interface StakeCardProps {
  id: string;
  avatar: string;
  staker: string;
  title: string;
  minInterest: string;
  maxAllowableDuration: string;
}

declare interface CollectCardProps {
  id: string;
  avatar: string;
  owner: string;
  title: string;
}
declare interface TooltipInfoProps {
  trigger?: string | JSX.Element;
  content: string | JSX.Element;
}

declare interface PleadProps {
  type: 'stake' | 'collect';
  interest?: string;
  duration?: string;
  minAmount?: number;
}

declare interface SubmitButtonProps {
  child: string | React.ReactNode;
  variant?: VariantProps;
  className?: ClassValue;
  loaderType?: LoaderProps['type'],
  isLoading: boolean;
}

