import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from({ length: 2025 - 1900 + 1 }, (_, i) => 1900 + i);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f2f5]">
      <div className="text-blue-600 text-5xl font-bold mb-6">facebook</div>

      <div className="bg-white px-6 pt-6 rounded-t-lg shadow-md w-[400px]">
        <h2 className="text-2xl font-bold text-center">Create a new account</h2>
        <p className="text-center text-sm text-[#606770] mt-1 mb-4 ">
          It's quick and easy.
        </p>
      </div>

      <div className="border-b border-amber-800"></div>

      <div className="bg-white p-6 rounded-b-lg shadow-md w-[400px]">
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="First name"
            className="border p-2 rounded-md w-1/2 text-sm"
          />
          <input
            type="text"
            placeholder="Surname"
            className="border p-2 rounded-md w-1/2 text-sm"
          />
        </div>

        <div className="mb-3">
          <label className="text-xs text-gray-600 font-semibold">
            Date of birth
          </label>

          <div className="flex gap-2 mt-1">
            <select className="border p-2 rounded-md w-1/3 text-sm">
              {days.map((day) => (
                <option
                  key={day}
                  value={day}
                >
                  {day}
                </option>
              ))}
            </select>

            <select className="border p-2 rounded-md w-1/3 text-sm">
              {months.map((month, index) => (
                <option
                  key={index}
                  value={month}
                >
                  {month}
                </option>
              ))}
            </select>

            <select className="border p-2 rounded-md w-1/3 text-sm">
              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="text-xs text-gray-600 font-semibold">Gender</label>
          <div className="flex gap-2 mt-1">
            <label className="flex items-center gap-1 border p-2 rounded-md w-1/3 text-sm">
              <input
                type="radio"
                name="gender"
              />
              Female
            </label>
            <label className="flex items-center gap-1 border p-2 rounded-md w-1/3 text-sm">
              <input
                type="radio"
                name="gender"
              />
              Male
            </label>
            <label className="flex items-center gap-1 border p-2 rounded-md w-1/3 text-sm">
              <input
                type="radio"
                name="gender"
              />
              Custom
            </label>
          </div>
        </div>

        <input
          type="text"
          placeholder="Mobile number or email address"
          className="border p-2 rounded-md w-full text-sm mb-3"
        />
        <input
          type="password"
          placeholder="New password"
          className="border p-2 rounded-md w-full text-sm mb-3"
        />

        <p className="text-[10px] text-gray-500 mb-3">
          People who use our service may have uploaded your contact information
          to Facebook.{" "}
          <span className="text-blue-600 cursor-pointer">Learn more.</span>
        </p>

        <p className="text-[10px] text-gray-500 mb-4">
          By clicking Sign Up, you agree to our{" "}
          <span className="text-blue-600 cursor-pointer">Terms</span>,
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
          and
          <span className="text-blue-600 cursor-pointer">Cookies Policy</span>.
          You may receive SMS notifications from us and can opt out at any time.
        </p>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md mb-4">
          Sign Up
        </button>

        <div className="text-center">
          <Link
            to="/login"
            className="text-blue-600 text-sm hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
