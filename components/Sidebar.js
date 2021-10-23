import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[270px] bg-primary text-white z-10 flex-shrink-0">
      <div className="h-full">
        <div className="p-4">
          <img
            className="h-12 w-auto mx-auto"
            src="/images/logo.png"
            alt="iPF Logo"
          />
        </div>
        <div className="flex flex-col mt-10 px-2 space-y-1">
          <Link href="/">
            <a className="hover:text-white flex flex-auto items-center p-4 text-lg rounded-md">
              <svg
                className="mb-0.5 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <h2 className="pl-2">Home</h2>
            </a>
          </Link>
          <Link href="/analytics">
            <a className="hover:text-white flex flex-auto items-center p-4 text-lg rounded-md">
              <svg
                className="mb-0.5 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
              <h2 className="pl-2">Analytics</h2>
            </a>
          </Link>
          <Link href="/roles">
            <a className="hover:text-white flex flex-auto items-center p-4 text-lg rounded-md">
              <svg
                className="mb-0.5 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="pl-2">Roles</h2>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
