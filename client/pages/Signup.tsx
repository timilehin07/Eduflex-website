import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Country {
  id: string;
  name: string;
  phone_code: number;
  code: string;
  currency: string;
  capital: string;
  iso_code: string;
  is_supported: boolean;
}

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  // Country dropdown states
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearchTerm, setCountrySearchTerm] = useState("");

  // Password validation
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Fetch countries on component mount
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://eduflexbackend.funtech.dev/api-gateway/v1/system/country_list"
      );
      const result = await response.json();
      if (response.ok && result.data) {
        setCountries(result.data);
        // Set Nigeria as default
        const nigeria = result.data.find((c: Country) => c.code === "NG");
        if (nigeria) {
          setSelectedCountry(nigeria);
        }
      }
    } catch (err) {
      console.error("Error fetching countries:", err);
    }
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(countrySearchTerm.toLowerCase()) ||
    country.phone_code.toString().includes(countrySearchTerm)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreedToTerms) {
      setError("Please agree to the Terms & Conditions");
      return;
    }

    if (!selectedCountry) {
      setError("Please select a country");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://eduflexbackend.funtech.dev/api-gateway/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "*/*",
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            country: {
              name: selectedCountry.name,
              code: selectedCountry.code,
            },
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Navigate to OTP verification page
        navigate("/signup-verify", { state: { email: email } });
      } else {
        // Handle error response
        setError(data.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-host overflow-x-hidden sm:overflow-x-visible">
      <div className="w-full lg:w-1/2 bg-brand-dark relative flex items-center justify-center p-6 sm:p-8 lg:p-12">
        <div
          className="absolute top-0 left-0 w-[793px] h-[793px] rounded-full opacity-20 -translate-x-[290px] -translate-y-[239px]"
          style={{
            background: "#CED671",
            filter: "blur(198.45px)",
          }}
        />

        <div className="relative w-full max-w-[446px] bg-white rounded-3xl border border-[#E7E8E9] p-6 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center w-[146px] h-[46px]">
            <svg
              className="w-[128px] h-auto"
              viewBox="0 0 128 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8859_818)">
                <path
                  d="M50.0538 25.4918V30.3641H39.5791V5.47412H49.8747V10.3465H44.8164V16.32H49.3771V21.1923H44.8164V25.4944H50.0538V25.4918Z"
                  fill="#6346FA"
                />
                <path
                  d="M64.1955 4.29932V30.3614H59.1372V29.1184C58.1761 30.2563 56.9649 30.824 55.7536 30.824C53.5102 30.824 51.3721 28.761 51.3721 24.4589V17.2765C51.3721 12.9744 53.5102 10.8773 55.7536 10.8773C56.9649 10.8773 58.1761 11.4817 59.1372 12.6196V4.29932H64.1955ZM59.1372 17.4552C59.1372 16.2831 58.4605 15.6787 57.7838 15.6787C57.1071 15.6787 56.4303 16.2831 56.4303 17.4552V24.2828C56.4303 25.4207 57.1071 26.0252 57.7838 26.0252C58.4605 26.0252 59.1372 25.4207 59.1372 24.2828V17.4552Z"
                  fill="#6346FA"
                />
                <path
                  d="M66.0495 11.377H71.1078V24.2832C71.1078 25.4211 71.7845 26.0256 72.4612 26.0256C73.1379 26.0256 73.8147 25.4211 73.8147 24.2832V11.377H78.8729V30.3644H73.8147V28.8349C72.8878 30.1148 71.4633 30.8611 70.073 30.8611C68.0059 30.8611 66.0469 29.2607 66.0469 25.5289V11.377H66.0495Z"
                  fill="#6346FA"
                />
                <path
                  d="M86.1778 10.3438V16.3173H90.7384V21.1897H86.1778V30.3641H80.9404V5.47412H91.236V10.3465H86.1778V10.3438Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M92.4463 30.3614V4.29932H97.5046V30.3614H92.4463Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M112.04 22.1149H104.275V24.283C104.275 25.4209 104.952 26.0254 105.629 26.0254C106.305 26.0254 106.982 25.4209 106.982 24.283V23.0031H112.04V24.4617C112.04 28.7296 108.833 30.8609 105.629 30.8609C102.424 30.8609 99.2168 28.727 99.2168 24.4617V17.2793C99.2168 12.9772 102.424 10.8433 105.629 10.8433C108.833 10.8433 112.04 12.9772 112.04 17.2793V22.1149ZM106.982 17.4554C106.982 16.2833 106.305 15.6788 105.629 15.6788C104.952 15.6788 104.275 16.2833 104.275 17.4554V18.5223H106.982V17.4554Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M128 30.3615H122.942V25.384C122.942 24.1383 121.839 23.4997 120.769 23.4997C119.7 23.4997 118.56 24.1383 118.56 25.384V30.3615H113.502V25.2053C113.502 23.4997 114.429 21.9702 115.996 21.258C114.998 20.191 113.681 18.7693 113.681 16.9927V11.374H118.739V16.6353C118.739 17.952 119.737 18.6274 120.769 18.6274C121.802 18.6274 122.765 17.952 122.765 16.6353V11.374H127.824V16.9927C127.824 18.7693 126.504 20.1937 125.509 21.258C127.147 21.9702 128.003 23.4629 128.003 25.2053V30.3615H128Z"
                  fill="#0AEFC9"
                />
                <path
                  d="M20.417 17.5815H22.7578C22.7578 20.2332 20.596 22.3935 17.9365 22.3935C15.277 22.3935 13.1152 20.2332 13.1152 17.5815H15.4561C15.4561 18.9455 16.5673 20.0571 17.9365 20.0571C19.3058 20.0571 20.417 18.9455 20.417 17.5815Z"
                  fill="#6346FA"
                />
                <path
                  d="M17.937 0C8.03111 0 0 8.01547 0 17.9021C0 27.7887 8.03111 35.8042 17.937 35.8042C27.8429 35.8042 35.874 27.7887 35.874 17.9021C35.874 8.01547 27.8429 0 17.937 0ZM28.1273 25.7126H22.1527C19.8618 25.7126 18.0028 27.568 18.0028 29.8543C18.0028 27.568 16.1465 25.7126 13.8556 25.7126H7.74672V9.7342H13.8556C16.1465 9.7342 18.0028 11.587 18.0028 13.876C18.0028 11.587 19.8618 9.7342 22.1527 9.7342H28.1273V25.7126Z"
                  fill="#0AEFC9"
                />
              </g>
              <defs>
                <clipPath id="clip0_8859_818">
                  <rect width="128" height="35.874" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12">
            <div className="flex flex-col gap-[22px]">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-host text-2xl font-semibold leading-[120%]">
                    Create an Account
                  </h1>
                  <div className="flex items-center gap-2">
                    <span className="text-[#696E7E] font-host text-base font-normal leading-[120%]">
                      Already have an Account
                    </span>
                    <Link to="/login" className="flex items-center gap-1 group">
                      <span className="text-[#035638] font-host text-base font-normal leading-[120%] group-hover:underline">
                        Login Account
                      </span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33301 8.50016H12.6663M12.6663 8.50016L7.99967 3.8335M12.6663 8.50016L7.99967 13.1668"
                          stroke="#035638"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-[15px]">
                  {error && (
                    <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-red-800 text-sm font-medium">
                        {error}
                      </p>
                    </div>
                  )}

                  <div className="flex items-start gap-2 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                      <label
                        htmlFor="firstName"
                        className="text-[#33363E] font-host text-sm font-medium leading-[160%]"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)] text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>

                    <div className="flex-1 flex flex-col gap-1 min-w-0">
                      <label
                        htmlFor="lastName"
                        className="text-[#33363E] font-host text-sm font-medium leading-[160%]"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)] text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="email"
                      className="text-[#33363E] font-host text-sm font-medium leading-[160%]"
                    >
                      Email Address
                    </label>
                    <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66699 5.8335L8.47109 10.5964C9.02207 10.982 9.29756 11.1749 9.59721 11.2496C9.8619 11.3156 10.1387 11.3156 10.4034 11.2496C10.7031 11.1749 10.9786 10.982 11.5296 10.5964L18.3337 5.8335M5.66699 16.6668H14.3337C15.7338 16.6668 16.4339 16.6668 16.9686 16.3943C17.439 16.1547 17.8215 15.7722 18.0612 15.3018C18.3337 14.767 18.3337 14.067 18.3337 12.6668V7.3335C18.3337 5.93336 18.3337 5.2333 18.0612 4.69852C17.8215 4.22811 17.439 3.84566 16.9686 3.60598C16.4339 3.3335 15.7338 3.3335 14.3337 3.3335H5.66699C4.26686 3.3335 3.5668 3.3335 3.03202 3.60598C2.56161 3.84566 2.17916 4.22811 1.93948 4.69852C1.66699 5.2333 1.66699 5.93336 1.66699 7.3335V12.6668C1.66699 14.067 1.66699 14.767 1.93948 15.3018C2.17916 15.7722 2.56161 16.1547 3.03202 16.3943C3.5668 16.6668 4.26686 16.6668 5.66699 16.6668Z"
                          stroke="#00000A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        id="email"
                        type="email"
                        placeholder="namesurname@gmail.com"
                        className="flex-1 text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-[3px]">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="password"
                        className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                      >
                        Create Password
                      </label>
                      <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1663 8.33333V6.66667C14.1663 4.36548 12.3009 2.5 9.99967 2.5C7.69849 2.5 5.83301 4.36548 5.83301 6.66667V8.33333M9.99967 12.0833V13.75M7.33301 17.5H12.6663C14.0665 17.5 14.7665 17.5 15.3013 17.2275C15.7717 16.9878 16.1542 16.6054 16.3939 16.135C16.6663 15.6002 16.6663 14.9001 16.6663 13.5V12.3333C16.6663 10.9332 16.6663 10.2331 16.3939 9.69836C16.1542 9.22795 15.7717 8.8455 15.3013 8.60582C14.7665 8.33333 14.0665 8.33333 12.6663 8.33333H7.33301C5.93288 8.33333 5.23281 8.33333 4.69803 8.60582C4.22763 8.8455 3.84517 9.22795 3.60549 9.69836C3.33301 10.2331 3.33301 10.9332 3.33301 12.3333V13.5C3.33301 14.9001 3.33301 15.6002 3.60549 16.135C3.84517 16.6054 4.22763 16.9878 4.69803 17.2275C5.23281 17.5 5.93288 17.5 7.33301 17.5Z"
                            stroke="#00000A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          className="flex-1 text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="flex items-start content-start gap-1 flex-wrap">
                      <div
                        className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                          hasMinLength
                            ? "border-green-500 bg-green-50"
                            : "border-[#E1E1E1] bg-[#F9FAFB]"
                        }`}
                      >
                        <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                          8 Characters
                        </span>
                      </div>
                      <div
                        className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                          hasUppercase
                            ? "border-green-500 bg-green-50"
                            : "border-[#E1E1E1] bg-[#F9FAFB]"
                        }`}
                      >
                        <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                          Uppercase
                        </span>
                      </div>
                      <div
                        className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                          hasLowercase
                            ? "border-green-500 bg-green-50"
                            : "border-[#E1E1E1] bg-[#F9FAFB]"
                        }`}
                      >
                        <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                          Lowercase
                        </span>
                      </div>
                      <div
                        className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                          hasNumber
                            ? "border-green-500 bg-green-50"
                            : "border-[#E1E1E1] bg-[#F9FAFB]"
                        }`}
                      >
                        <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                          A Number
                        </span>
                      </div>
                      <div
                        className={`flex px-2.5 py-1.5 items-center justify-center gap-2.5 rounded-[32px] border transition-colors ${
                          hasSpecialChar
                            ? "border-green-500 bg-green-50"
                            : "border-[#E1E1E1] bg-[#F9FAFB]"
                        }`}
                      >
                        <span className="text-black font-['Red_Hat_Display'] text-xs font-normal leading-[130%]">
                          Special Character
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="confirmPassword"
                        className="text-[#101828] font-host text-sm font-medium leading-[160%]"
                      >
                        Confirm Password
                      </label>
                      <div className="flex items-center gap-2 px-3 py-[13px] rounded-[10px] border border-[#E2E4E9] bg-white shadow-[0_1px_2px_0_rgba(228,229,231,0.24)]">
                        <svg
                          className="w-5 h-5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1663 8.33333V6.66667C14.1663 4.36548 12.3009 2.5 9.99967 2.5C7.69849 2.5 5.83301 4.36548 5.83301 6.66667V8.33333M9.99967 12.0833V13.75M7.33301 17.5H12.6663C14.0665 17.5 14.7665 17.5 15.3013 17.2275C15.7717 16.9878 16.1542 16.6054 16.3939 16.135C16.6663 15.6002 16.6663 14.9001 16.6663 13.5V12.3333C16.6663 10.9332 16.6663 10.2331 16.3939 9.69836C16.1542 9.22795 15.7717 8.8455 15.3013 8.60582C14.7665 8.33333 14.0665 8.33333 12.6663 8.33333H7.33301C5.93288 8.33333 5.23281 8.33333 4.69803 8.60582C4.22763 8.8455 3.84517 9.22795 3.60549 9.69836C3.33301 10.2331 3.33301 10.9332 3.33301 12.3333V13.5C3.33301 14.9001 3.33301 15.6002 3.60549 16.135C3.84517 16.6054 4.22763 16.9878 4.69803 17.2275C5.23281 17.5 5.93288 17.5 7.33301 17.5Z"
                            stroke="#00000A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm your password"
                          className="flex-1 text-[#00000A] font-host text-sm font-normal leading-[160%] outline-none placeholder:text-[#98A2B3]"
                          required
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 relative">
                    <label
                      htmlFor="mobile"
                      className="text-[#090909] font-host text-sm font-medium leading-normal tracking-[-0.28px]"
                    >
                      Mobile Number
                    </label>

                    <div className="flex items-start gap-1.5 flex-wrap sm:flex-nowrap">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex px-2 py-[15px] flex-col items-center justify-center gap-2.5 rounded-[10px] border border-[#E5E5E6] bg-white min-w-[70px] sm:min-w-[90px]"
                          disabled={isLoading}
                        >
                          <div className="flex h-[18px] items-center gap-1">
                            <span className="text-[#AAAAAD] font-['Inter'] text-base font-normal tracking-[-0.32px]">
                              +{selectedCountry?.phone_code || "234"}
                            </span>

                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#00000A"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </button>

                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-[280px] max-h-[300px] overflow-y-auto bg-white border border-[#E5E5E6] rounded-lg shadow-lg z-50">
                            <div className="sticky top-0 bg-white p-2 border-b border-[#E5E5E6]">
                              <input
                                type="text"
                                placeholder="Search country..."
                                value={countrySearchTerm}
                                onChange={(e) => setCountrySearchTerm(e.target.value)}
                                className="w-full px-3 py-2 text-sm border border-[#E5E5E6] rounded-md outline-none focus:border-brand-purple"
                              />
                            </div>
                            <div className="py-1">
                              {filteredCountries.map((country) => (
                                <button
                                  key={country.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedCountry(country);
                                    setShowCountryDropdown(false);
                                    setCountrySearchTerm("");
                                  }}
                                  className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center justify-between text-sm"
                                >
                                  <span className="text-[#00000A]">{country.name}</span>
                                  <span className="text-[#AAAAAD]">+{country.phone_code}</span>
                                </button>
                              ))}
                              {filteredCountries.length === 0 && (
                                <div className="px-3 py-2 text-sm text-[#AAAAAD]">
                                  No countries found
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <input
                        id="mobile"
                        type="tel"
                        placeholder="0000 000 000"
                        className="flex-1 min-w-0 w-full px-4 py-[15px] flex-col items-start justify-center gap-2.5 rounded-[10px] border border-[#DBDBDC] bg-white text-[#00000A] font-['Inter'] text-base font-normal tracking-[-0.32px] outline-none placeholder:text-[#AAAAAD]"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-start gap-1 w-full">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-[18px] h-[18px] rounded border-[1.5px] border-[#00B55A] mt-0.5"
                  required
                  disabled={isLoading}
                />
                <label
                  htmlFor="terms"
                  className="flex-1 text-[#696E7E] font-host text-[13px] font-normal leading-[120%]"
                >
                  By continuing , you agree to the{" "}
                  <span className="text-[#B7BE64] underline">
                    Terms & Conditions
                  </span>{" "}
                  of Eduflex
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex h-12 px-4 items-center justify-center gap-2 rounded-full bg-brand-purple hover:bg-brand-purple/90 transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="text-white font-host text-base font-medium leading-[160%]">
                      Creating Account...
                    </span>
                  </>
                ) : (
                  <span className="text-white font-host text-base font-medium leading-[160%]">
                    Create Account
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/494915144f83153c3908d0ebef3bcd2adc29906d?width=1440"
          alt="Student learning with AI"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
