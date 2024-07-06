import HeaderBox from "@/components/HeaderBox";
import PaymentTransferForm from "@/components/PaymentTransferForm";
import { getAccounts } from "@/lib/server/plaid.actions";
import { getLoggedInUser } from "@/lib/server/user.actions";

export default async function PaymentTransfer() {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return;

  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });
  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer."
      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
}
