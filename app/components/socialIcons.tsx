import "@/app/styles/social-icons.scss";

export default function SocialIcons() {
  return (
    <>
    <div className="flex justify-center items-center pt-4">
      <a
        href="https://www.facebook.com/profile.php?id=61575899609213"
        target="_blank"
        className=""
        title="Facebook Social Link"
        aria-label="Facebook Social Link"
      >
        <div style={{}} className="social-icons">
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 257.81 500"
            fill="white"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                style={{ strokeWidth: 0 }}
                d="M74.9,500v-223.63H0v-88.87h74.9v-70.02C74.9,41.41,121.39,0,189.26,0c32.52,0,60.45,2.44,68.55,3.52v79.49h-47.07c-36.91,0-44.04,17.58-44.04,43.26v61.23h83.3l-11.43,88.87h-71.87v223.63"
              />
            </g>
          </svg>
        </div>{" "}
      </a>
      {/* end of social icon */}
      </div>
    </>
  );
}
