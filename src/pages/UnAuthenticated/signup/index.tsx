import { toast } from "react-toastify";
import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, provider } from "../../../firebase";
import { Dropdown } from "../../../components/dropdown";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FormInput } from "../../../components/form-input";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Writer");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checkPassword, setCheckPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };
  const handleCheckPassword = () => {
    if (password && confirmPassword) {
      if (
        typeof password !== "string" ||
        typeof confirmPassword !== "string" ||
        password !== confirmPassword
      ) {
        setCheckPassword(false);
      } else {
        setCheckPassword(true);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const username = `${lastName} ${firstName}`;
    if (!!checkPassword) {
      try {
        setIsLoading(true);
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const ref = doc(db, "users", user.uid);
        const userDoc = await getDoc(ref);

        if (!userDoc.exists()) {
          await setDoc(ref, {
            bio: "",
            role: role,
            userImg: "",
            email: email,
            userId: user.uid,
            username: username,
            password: password,
          });

          setIsLoading(false);
          toast.success("Account created successfully");
          navigate("/login");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(
          (error as Error).message === "Firebase: Error (auth/internal-error)."
            ? "Check your internet connection"
            : (error as Error).message
        );
      }
    } else {
      toast.error("Password doesn't match");
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
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        (error as Error).message === "Firebase: Error (auth/internal-error)."
          ? "Check your internet connection"
          : (error as Error).message
      );
    }
  };

  const handleRole = (selectedValue: string) => {
    setRole(selectedValue);
  };

  return (
    <div className="flex overflow-hidden">
      <div className="hidden md:block md:relative lg:block lg:relative">
        <div className="">
          <img
            className="object-cover w-full h-full"
            src={`${process.env.PUBLIC_URL}/assets/woman-bg.png`}
            alt="background"
          />
        </div>
        <div className="absolute inset-0 overlay"></div>
        <div className="absolute inset-0 lg:flex lg:flex-col lg:justify-center text-white mx-2 lg:mx-auto">
          <h4 className="text-3xl font-semibold text-center">CHATTER</h4>
          <p className="">
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
      </div>
      <div className=" ml-20 my-4 px-4 py-2 space-y-4">
        <div className="space-y-2">
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
              src={`${process.env.PUBLIC_URL}/assets/Group-14.svg`}
              alt="toggle"
            />
          </div>
          <h2 className="font-semibold text-2xl">
            Register as a Writer/Reader
          </h2>
        </div>
        <div className="flex gap-4">
          <FormInput
            value={firstName}
            title="First name"
            type="text"
            content="John"
            onChange={(firstName) => {
              setFirstName(firstName);
            }}
          />
          <FormInput
            value={lastName}
            title="Last name"
            type="text"
            content="Doe"
            onChange={(lastName) => {
              setLastName(lastName);
            }}
          />
        </div>
        <div className="">
          <Dropdown
            title="You are joining as?"
            content={["Writer", "Reader"]}
            onChange={handleRole}
          />
        </div>
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
              onBlur={handleCheckPassword}
              required
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-2  hover:rounded hover:px-2 hover:py-2 hover:bg-gray-300 hover:bg-opacity-50"
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
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Confirm password</label>
          <div className="flex relative">
            <input
              className="px-4 py-2 border border-gray rounded shadow w-full"
              value={confirmPassword}
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              onChange={(event) => {
                event.preventDefault();
                setConfirmPassword(event.target.value);
              }}
              onBlur={handleCheckPassword}
              required
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-2 hover:rounded hover:px-2 hover:py-2 hover:bg-gray-300 hover:bg-opacity-50 transition duration-300"
              onClick={togglePasswordVisibility}
            >
              <img
                src={`${process.env.PUBLIC_URL}/assets/eye-closed.svg`}
                alt="show"
              />
            </span>
          </div>
        </div>
        <div className={`${checkPassword ? "hidden" : ""}`}>
          <h4 className="text-red-500">Password didn't match</h4>
        </div>
        <div className="">
          <button
            onClick={handleSubmit}
            className="bg-blue text-white rounded px-4 py-3 text-sm font-semibold w-full"
          >
            {isLoading ? "..." : "Create account"}
          </button>
        </div>
        <button
          className="bg-white flex justify-center gap-2 text-black rounded px-4 border border-gray py-2 text-sm font-semibold w-full shadow"
          onClick={googleAuth}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/google.svg`} alt="" />
          <span className="">Sign up with google</span>
        </button>
        <button className="bg-white flex justify-center gap-2  text-black rounded px-4 border border-gray py-2 text-sm font-semibold w-full shadow">
          <img
            src={`${process.env.PUBLIC_URL}/assets/linkedIN.svg`}
            alt="linkedIN"
          />
          <span className="">Sign up with Linkedin</span>
        </button>
      </div>
    </div>
  );
}
