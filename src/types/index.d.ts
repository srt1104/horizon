declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
};

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  sharableId: string;
};

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare type SignUpParams = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  dateOfBirth?: string;
  ssn?: string;
};

declare type SignInParams = {
  email: string;
  password: string;
};

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

declare interface AnimatedCounterProps {
  amount: number;
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface SidebarProps {
  user: User;
}

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

declare interface MobileNavProps {
  user: User;
}

declare interface FooterProps {
  user: User;
  type?: "desktop" | "mobile";
}
