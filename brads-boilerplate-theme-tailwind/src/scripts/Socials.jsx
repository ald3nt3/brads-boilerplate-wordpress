import clsx from "clsx";
import React from "react";

function Socials({ className }) {
  return (
    <div className={clsx(className, "flex flex-row gap-4")}>
      <div>
        <a
          href="https://www.facebook.com/HAPPYUPkite/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <i
              className="
            hover:text-accent transition duration-300
            fa-brands fa-facebook-f"
            />
          </span>
        </a>
      </div>

      <div>
        <a
          href="https://www.instagram.com/happyupkiteschool/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <i
              className="
            hover:text-accent transition duration-300
            fa-brands fa-instagram"
            />
          </span>
        </a>
      </div>

      <div>
        <a
          href="https://www.youtube.com/channel/UCw_hXZd2Cjui_vcD7j0RspA/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <i
              className="
            hover:text-accent transition duration-300
            fa-brands fa-youtube"
            />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Socials;
