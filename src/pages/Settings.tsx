export default function Settings() {
  return (
    <div className="flex h-full flex-col gap-7.5 pb-10">
      <div className="flex h-17 items-center bg-[#FFFFFF] px-5 text-left text-lg leading-5.25 tracking-normal text-[#1D2226] capitalize">
        Account Settings
      </div>
      <div className="flex flex-col gap-7.5 px-5">
        <div className="flex gap-5">
          <div className="relative">
            <img src="avatar.png" alt="user avatar" className="size-19" />
            <span>
              <img
                src="camera-icon.png"
                alt="camera-icon"
                className="absolute right-0 bottom-0 h-5.75 w-5.25"
              />
            </span>
          </div>

          <div className="text-left">
            <h1 className="mb-1 text-[15px] leading-4.75 font-semibold tracking-normal text-[#1D2226] capitalize">
              Marry Doe
            </h1>
            <p className="text-sm leading-4.75 tracking-normal text-[#1D2226] capitalize">
              Marry@Gmail.Com
            </p>
          </div>
        </div>

        <p className="text-left text-sm text-[#1D2226] capitalize">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="h-0.5 w-full bg-[repeating-linear-gradient(to_right,#CBCBCB_0_5px,transparent_5px_7px)]" />

      <div className="mt-auto h-0.5 w-full bg-[repeating-linear-gradient(to_right,#CBCBCB_0_5px,transparent_5px_7px)]" />
    </div>
  );
}
