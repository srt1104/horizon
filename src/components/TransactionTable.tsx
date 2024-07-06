import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactionCategoryStyles } from "@/constants";
import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
} from "@/lib/utils";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-[12px] font-medium", textColor)}>{category}</p>
    </div>
  );
};

export default function TransactionsTable({
  transactions,
}: TransactionTableProps) {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map(
          ({
            id,
            date,
            amount,
            type,
            name,
            paymentChannel,
            category,
          }: Transaction) => {
            const status = getTransactionStatus(new Date(date));
            const formattedAmount = formatAmount(amount);

            const isDebit = type === "debit";
            // const isCredit = type === "credit";

            return (
              <TableRow
                key={id}
                className={cn(
                  "!over:bg-none !border-b-DEFAULT",
                  isDebit || amount < 0 ? "bg-[#fffbfa]" : "bg-[#fbfef9]"
                )}
              >
                <TableCell className="max-w-[250]px pl-2 pr-10">
                  <h1 className="text-14 truncate font-semibold text-[#344054]">
                    {name}
                  </h1>
                </TableCell>

                <TableCell
                  className={cn(
                    "pl-2 pr-10 font-semibold",
                    isDebit || amount < 0 ? "text-[#f04438]" : "text-[#039855]"
                  )}
                >
                  {isDebit ? `-${amount}` : formattedAmount}
                </TableCell>

                <TableCell className="pl-2 pr-10">
                  <CategoryBadge category={status} />
                </TableCell>
                <TableCell className="pl-2 pr-10 min-w-32">
                  {formatDateTime(new Date(date)).dateTime}
                </TableCell>
                <TableCell className="pl-2 pr-10 capitalize min-w-24 max-md:hidden">
                  {paymentChannel}
                </TableCell>
                <TableCell className="pl-2 pr-10 max-md:hidden">
                  <CategoryBadge category={category} />
                </TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
    </Table>
  );
}
