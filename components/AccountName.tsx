import { useWeb3React } from "@web3-react/core";
import useENSName from "../hooks/useENSName";
import { shortenHex } from "../util";

const AccountName = () => {
          
  const { error, account } = useWeb3React();
  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  return (
    <section>
      {ENSName || `${shortenHex(account, 4)}`}
    </section>
  );
};

export default AccountName;
