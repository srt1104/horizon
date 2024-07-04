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
