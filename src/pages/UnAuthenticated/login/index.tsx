import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, db } from "../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FormInput } from "../../../components/form-input";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

  const navigate = useNavigate();
  const toggleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      email &&
      typeof email === "string" &&
      password &&
      typeof password === "string"
    ) {
      try {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("loginUser", user);
            navigate("/dashboard");
          })
          .catch(() => {
            setIsLoading(false);
            toast.error("Incorrect email or password");
          });
      } catch (error) {
        setIsLoading(false);
        toast.error(`Connection error ${error}`);
      }
    } else {
      toast("You haven't entered your email or your password");
    }
  };

  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          bio: "",
          userId: newUser.uid,
          email: newUser.email,
          userImg: newUser.photoURL,
          username: newUser.displayName,
        });
      }
      toast.success("You are in");
      navigate("/feeds");
    } catch (error) {
      toast.error(
        (error as Error).message === "Firebase: Error (auth/internal-error)."
          ? "Check your internet connection"
          : (error as Error).message
      );
    }
  };

  return (
    <div className="md:flex lg:flex">
      <div className="hidden md:block lg:block md:relative lg:relative">
        <div className="">
          <img
            className="object-cover"
            src={`${process.env.PUBLIC_URL}/assets/woman-bg.png`}
            alt="background"
          />
        </div>
        <div className="absolute inset-0 overlay"></div>
        <div className="absolute inset-0 text-white flex flex-col items-center">
          <h4 className="">CHATTER</h4>
          <p className="">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
      </div>
      <div className="ml-20 px-4 my-4 px-4 py-2">
        <div className="mb-20 space-y-2">
          <div className="flex justify-between">
            <Link to="/signup">
              <h4 className="font-semibold">REGISTER</h4>
            </Link>
            <Link to="/login">
              <h4 className="font-semibold ">LOG IN</h4>
            </Link>
          </div>
          <div className="">
            <img
              src={`${process.env.PUBLIC_URL}/assets/Group-15.svg`}
              alt="toggle"
            />
          </div>
        </div>
        <div className="space-y-4 my-16">
          <h2 className="font-semibold text-2xl text-center">Welcome back</h2>
          <div className="">
            <FormInput
              value={email}
              title="Email address"
              type="email"
              content="Johndoe@gmail.com"
              onChange={(email) => {
                setEmail(email);
              }}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="">Password</label>
            <div className="flex relative">
              <input
                className="px-4 py-2 border border-gray rounded shadow w-full"
                value={password}
                type={revealPassword ? "text" : "password"}
                placeholder="**********"
                onChange={(event) => {
                  event.preventDefault();
                  setPassword(event.target.value);
                }}
                required
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onMouseDown={toggleRevealPassword}
                onMouseUp={toggleRevealPassword}
                onMouseLeave={() => setRevealPassword(false)}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Eye.svg`}
                  alt="show"
                />
              </span>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue text-white rounded px-4 py-3 text-sm font-semibold w-full"
          >
            {isLoading ? "..." : "Sign in"}
          </button>
          <button
            className="bg-white flex justify-center gap-2 text-black rounded px-4 border border-gray py-2 text-sm font-semibold w-full shadow"
            onClick={googleAuth}
          >
            <img src={`${process.env.PUBLIC_URL}/assets/google.svg`} alt="" />
            <span className="">Sign in with google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
