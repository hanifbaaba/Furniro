// import Link from "next/link";
export default function ContactPage() {
  return (
    <div>
      <h1>Sign in to your account</h1>
      <p>
        Find information about your current and previous orders, or edit your
        account details.
      </p>
      <br />
      <h3>Email</h3>
      <input type="email" placeholder="johndoe@gmail.com" />
      <br />
      <h3>Password</h3>
      <input type="password" />
      <br />
      <button>Login</button>
      <button>Sign up with google</button>
      <p>Don't have an account? Sign up</p>
      <p>Forgot password?</p>
    </div>
  );
}
