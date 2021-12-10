import Link from "next/link";
import Account from "./Account";

// const NavBar = () => {
// const Account = ({ triedToEagerConnect }: AccountProps) => {
const Header = ({ triedToEagerConnect }) => {
  return (
      <header>
        <button>
          <Link href="/">
            home
          </Link>
        </button>

        <button>
          <Link href="/test">
            alpha
          </Link>
        </button>

        
        <Account triedToEagerConnect={triedToEagerConnect} />
      </header>
  )
}

export default Header;
