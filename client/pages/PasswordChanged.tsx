import { Link } from "react-router-dom";

export default function PasswordChanged() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#2D1F70] p-6 font-host">
      <div className="w-full max-w-[440px] bg-[#2D1F70] rounded-3xl p-6 flex flex-col items-center">
        <div className="w-full max-w-[400px] flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-10 w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9d7263cdc4643ed256b94492d281e4040b0a8297?width=300"
              alt="Success"
              className="w-[150px] h-[150px] rounded-full"
            />

            <div className="flex flex-col items-center gap-3.5 w-full">
              <h1 className="text-[#FAFAFA] text-center font-clash text-2xl font-medium leading-[120%]">
                Password Changed
              </h1>
              <p className="text-[#FAFAFA] text-center font-host text-base font-normal leading-[150%]">
                Your Password has been changed successfully, click on Button, to
                login into your account with our new Password.
              </p>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="w-full flex h-12 px-6 items-center justify-center gap-2 rounded-full bg-[#F9F9F9] hover:bg-white transition-colors shadow-[0_8px_24px_rgba(10,131,255,0.15)]"
          >
            <span className="text-[#222328] font-host text-base font-medium leading-[160%]">
              Go to Dashboard
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
