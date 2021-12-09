import Link from "next/link";
import Account from "./Account";

// const NavBar = () => {
// const Account = ({ triedToEagerConnect }: AccountProps) => {
const NavBar = ({ triedToEagerConnect }) => {
  return (
    <section>
      <Link href="/">
        <section className="nav">
          this is the nav bar
        </section>
      </Link>

      <Link href="/">
        <a>more nav</a>
      </Link>

      <Account triedToEagerConnect={triedToEagerConnect} />
    </section>
  )
}

export default NavBar;
