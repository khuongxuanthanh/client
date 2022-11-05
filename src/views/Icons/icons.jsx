import React from "react";
import {
  BsFacebook, BsYoutube, BsWhatsapp, BsDribbble,
  BsTwitter, BsInstagram, BsFillSuitHeartFill, BsSuitHeart
} from "react-icons/bs";

import {
  MdWifiCalling3,
} from "react-icons/md";

const Icons = () => {
  return <div>Icons</div>;
};

const Facebook = () => {
  return (
    <BsFacebook />
  );
};

const Dribbble = () => {
  return (
    <BsDribbble />
  );
};

const Twitter = () => {
  return (
    <BsTwitter />
  );
};

const Github = () => {
  return (
    <BsGithub />
  );
};

const Instagram = () => {
  return (
    <BsInstagram />
  );
};

const YouTube = () => {
  return (
    <BsYoutube />
  );
};

const Whatsapp = () => {
  return (
    <BsWhatsapp />
  );
};

const Calling = () => {
  return (
    <MdWifiCalling3 />
  );
};

const Place = () => {
  return (
    <svg
      width={18}
      height={23}
      viewBox="0 0 18 23"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 6C6.67893 6 5 7.67893 5 9.75C5 11.8211 6.67893 13.5 8.75 13.5C10.8211 13.5 12.5 11.8211 12.5 9.75C12.5 7.67893 10.8211 6 8.75 6ZM6.5 9.75C6.5 8.50736 7.50736 7.5 8.75 7.5C9.99264 7.5 11 8.50736 11 9.75C11 10.9926 9.99264 12 8.75 12C7.50736 12 6.5 10.9926 6.5 9.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 0C3.86666 0 0 4.24277 0 9.3587C0 10.9994 0.815106 12.9314 1.84064 14.7445C2.88277 16.587 4.21288 18.4262 5.37903 19.9133L5.41793 19.9629C5.98714 20.6888 6.47203 21.3073 6.94224 21.7344C7.45524 22.2004 8.02094 22.5055 8.75 22.5055C9.47906 22.5055 10.0448 22.2004 10.5578 21.7344C11.028 21.3072 11.5129 20.6888 12.0821 19.9629L12.121 19.9133C13.2871 18.4262 14.6172 16.587 15.6594 14.7445C16.6849 12.9314 17.5 10.9994 17.5 9.3587C17.5 4.24277 13.6333 0 8.75 0ZM1.5 9.3587C1.5 4.96571 4.79678 1.5 8.75 1.5C12.7032 1.5 16 4.96571 16 9.3587C16 10.5852 15.3604 12.2264 14.3537 14.006C13.3637 15.7563 12.0842 17.5294 10.9406 18.9877C10.3217 19.777 9.91413 20.2926 9.54918 20.6241C9.21635 20.9264 8.99418 21.0055 8.75 21.0055C8.50582 21.0055 8.28365 20.9264 7.95082 20.6241C7.58587 20.2926 7.17834 19.777 6.55938 18.9877C5.41578 17.5294 4.13628 15.7563 3.14625 14.006C2.13962 12.2264 1.5 10.5852 1.5 9.3587Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Heart = () => {
  return (
    <BsFillSuitHeartFill />
  );
};

const FilledHeart = () => {
  return (
    <BsSuitHeart />
  );
};

const Cart = () => {
  return (
    <svg
      width={24}
      height={21}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.7276 0.818082C1.62713 0.416238 1.21993 0.171926 0.818082 0.272397C0.416238 0.372868 0.171926 0.780075 0.272397 1.18192L1.7276 0.818082ZM5.76564 15.7854L6.21646 15.186L5.76564 15.7854ZM3.02129 9.25175L3.75064 9.07694L3.02129 9.25175ZM5.58574 15.6435L6.06354 15.0654L5.58574 15.6435ZM22.0192 9.74254L22.7485 9.91734L22.0192 9.74254ZM19.8897 15.3575L19.3643 14.8223L19.8897 15.3575ZM19.0404 16.0273L19.4384 16.663L19.0404 16.0273ZM21.9421 5.75597L22.4568 5.21052L21.9421 5.75597ZM22.3038 6.21465L22.9542 5.8412L22.3038 6.21465ZM14.0001 9.25C13.5859 9.25 13.2501 9.58579 13.2501 10C13.2501 10.4142 13.5859 10.75 14.0001 10.75V9.25ZM17.0001 12.25C16.5859 12.25 16.2501 12.5858 16.2501 13C16.2501 13.4142 16.5859 13.75 17.0001 13.75V12.25ZM2.05273 5.96053H18.445V4.46053H2.05273V5.96053ZM13.0837 16.0395H12.5791V17.5395H13.0837V16.0395ZM3.75064 9.07694L2.78208 5.03572L1.32339 5.38533L2.29195 9.42655L3.75064 9.07694ZM2.78034 5.02861L1.7276 0.818082L0.272397 1.18192L1.32513 5.39244L2.78034 5.02861ZM12.5791 16.0395C10.7352 16.0395 9.41662 16.0383 8.38995 15.919C7.38226 15.8019 6.738 15.5783 6.21646 15.186L5.31482 16.3848C6.12828 16.9966 7.06459 17.275 8.21679 17.4089C9.35001 17.5406 10.7706 17.5395 12.5791 17.5395V16.0395ZM2.29195 9.42655C2.71343 11.1852 3.04339 12.5669 3.43559 13.6383C3.83435 14.7275 4.32336 15.5731 5.10793 16.2216L6.06354 15.0654C5.56052 14.6496 5.19292 14.0752 4.84416 13.1226C4.48885 12.152 4.18038 10.87 3.75064 9.07694L2.29195 9.42655ZM6.21646 15.186C6.16457 15.147 6.11359 15.1067 6.06354 15.0654L5.10793 16.2216C5.17564 16.2775 5.24462 16.332 5.31482 16.3848L6.21646 15.186ZM13.0837 17.5395C14.6483 17.5395 15.8774 17.5404 16.8659 17.4404C17.8695 17.3389 18.6953 17.1283 19.4384 16.663L18.6424 15.3917C18.1682 15.6885 17.5955 15.859 16.715 15.948C15.8194 16.0386 14.6788 16.0395 13.0837 16.0395V17.5395ZM19.3643 14.8223C19.145 15.0376 18.9029 15.2285 18.6424 15.3917L19.4384 16.663C19.7909 16.4423 20.1184 16.184 20.4151 15.8927L19.3643 14.8223ZM18.445 5.96053C19.4375 5.96053 20.1131 5.96185 20.6157 6.02318C21.106 6.08301 21.3071 6.18794 21.4273 6.30143L22.4568 5.21052C21.9991 4.77856 21.4246 4.61076 20.7974 4.53423C20.1826 4.4592 19.3986 4.46053 18.445 4.46053V5.96053ZM22.7485 9.91734C22.9708 8.99004 23.1548 8.22794 23.2251 7.61254C23.2969 6.98475 23.2676 6.38698 22.9542 5.8412L21.6534 6.5881C21.7357 6.7315 21.7909 6.95145 21.7348 7.44219C21.6773 7.94532 21.5212 8.60257 21.2898 9.56774L22.7485 9.91734ZM21.4273 6.30143C21.5163 6.38541 21.5925 6.482 21.6534 6.5881L22.9542 5.8412C22.8202 5.60776 22.6526 5.39527 22.4568 5.21052L21.4273 6.30143ZM21.0001 12.25H17.0001V13.75H21.0001V12.25ZM21.9575 9.25L14.0001 9.25V10.75L21.9575 10.75V9.25ZM21.2898 9.56774C21.269 9.65479 21.2484 9.74053 21.2281 9.82505L22.6868 10.1749C22.7071 10.0903 22.7277 10.0044 22.7485 9.91734L21.2898 9.56774ZM21.2281 9.82505C20.9305 11.0658 20.699 12.0133 20.4566 12.7717L21.8855 13.2283C22.148 12.4067 22.3925 11.4015 22.6868 10.1749L21.2281 9.82505ZM20.4566 12.7717C20.1309 13.791 19.8104 14.3844 19.3643 14.8223L20.4151 15.8927C21.1139 15.2067 21.5286 14.3453 21.8855 13.2283L20.4566 12.7717ZM21.0001 13.75H21.1711V12.25H21.0001V13.75Z"
        fill="currentColor"
      />
      <path
        d="M10.4738 19.9474C10.4738 20.5287 10.0025 21 9.42116 21C8.83981 21 8.36853 20.5287 8.36853 19.9474C8.36853 19.366 8.83981 18.8947 9.42116 18.8947C10.0025 18.8947 10.4738 19.366 10.4738 19.9474Z"
        fill="currentColor"
      />
      <path
        d="M16.7896 19.9474C16.7896 20.5287 16.3183 21 15.737 21C15.1556 21 14.6843 20.5287 14.6843 19.9474C14.6843 19.366 15.1556 18.8947 15.737 18.8947C16.3183 18.8947 16.7896 19.366 16.7896 19.9474Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Account = () => {
  return (
    <svg
      width={16}
      height={21}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 5C11.25 6.79493 9.79493 8.25 8 8.25V9.75C10.6234 9.75 12.75 7.62335 12.75 5H11.25ZM8 8.25C6.20507 8.25 4.75 6.79493 4.75 5H3.25C3.25 7.62335 5.37665 9.75 8 9.75V8.25ZM4.75 5C4.75 3.20507 6.20507 1.75 8 1.75V0.25C5.37665 0.25 3.25 2.37665 3.25 5H4.75ZM8 1.75C9.79493 1.75 11.25 3.20507 11.25 5H12.75C12.75 2.37665 10.6234 0.25 8 0.25V1.75ZM5 12.75H11V11.25H5V12.75ZM11 19.25H5V20.75H11V19.25ZM5 19.25C3.20507 19.25 1.75 17.7949 1.75 16H0.25C0.25 18.6234 2.37665 20.75 5 20.75V19.25ZM14.25 16C14.25 17.7949 12.7949 19.25 11 19.25V20.75C13.6234 20.75 15.75 18.6234 15.75 16H14.25ZM11 12.75C12.7949 12.75 14.25 14.2051 14.25 16H15.75C15.75 13.3766 13.6234 11.25 11 11.25V12.75ZM5 11.25C2.37665 11.25 0.25 13.3766 0.25 16H1.75C1.75 14.2051 3.20507 12.75 5 12.75V11.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Search = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0.25C5.61522 0.25 1.25 4.61522 1.25 10C1.25 15.3848 5.61522 19.75 11 19.75C16.3848 19.75 20.75 15.3848 20.75 10C20.75 4.61522 16.3848 0.25 11 0.25ZM2.75 10C2.75 5.44365 6.44365 1.75 11 1.75C15.5563 1.75 19.25 5.44365 19.25 10C19.25 14.5563 15.5563 18.25 11 18.25C6.44365 18.25 2.75 14.5563 2.75 10Z"
        fill="currentColor"
      />
      <path
        d="M19.5304 17.4698C19.2375 17.1769 18.7626 17.1769 18.4697 17.4698C18.1768 17.7626 18.1768 18.2375 18.4697 18.5304L22.4696 22.5304C22.7625 22.8233 23.2374 22.8233 23.5303 22.5304C23.8232 22.2375 23.8232 21.7626 23.5303 21.4697L19.5304 17.4698Z"
        fill="currentColor"
      />
    </svg>
  );
};

const CandyMenu = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        d="M6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 12C22 13.1046 21.1046 14 20 14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10C21.1046 10 22 10.8954 22 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const ChevronUp = () => {
  return (
    <svg
      width={13}
      height={6}
      viewBox="0 0 13 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.4385 1.6515C6.58991 1.63132 6.7431 1.63132 6.89451 1.6515C7.13563 1.68363 7.40487 1.80436 7.82403 2.15628C8.25554 2.51858 8.7648 3.054 9.50476 3.83453L11.328 5.75777C11.6323 6.07872 12.1278 6.08103 12.4348 5.76294C12.7418 5.44484 12.744 4.92681 12.4397 4.60586L10.5836 2.64797C9.88454 1.91054 9.3132 1.30785 8.80411 0.880425C8.27473 0.435957 7.7374 0.114213 7.09241 0.0282643C6.8096 -0.00942147 6.52341 -0.00942141 6.2406 0.0282643C5.59561 0.114213 5.05828 0.435958 4.5289 0.880425C4.01981 1.30785 3.44846 1.91055 2.74938 2.64798L0.893261 4.60586C0.589 4.92681 0.591211 5.44484 0.898199 5.76294C1.20519 6.08103 1.7007 6.07872 2.00496 5.75777L3.82824 3.83453C4.56821 3.054 5.07747 2.51858 5.50898 2.15628C5.92814 1.80436 6.19737 1.68363 6.4385 1.6515Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ChevronDown = () => {
  return (
    <svg
      width={12}
      height={6}
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5327 1.52796C11.8243 1.23376 11.8222 0.758893 11.528 0.467309C11.2338 0.175726 10.7589 0.177844 10.4673 0.472041L8.72 2.23501C8.01086 2.9505 7.52282 3.44131 7.1093 3.77341C6.7076 4.096 6.44958 4.20668 6.2185 4.23613C6.07341 4.25462 5.92659 4.25462 5.7815 4.23613C5.55042 4.20668 5.2924 4.09601 4.89071 3.77341C4.47718 3.44131 3.98914 2.95051 3.28 2.23501L1.53269 0.472042C1.24111 0.177845 0.766238 0.175726 0.472041 0.46731C0.177844 0.758894 0.175726 1.23376 0.467309 1.52796L2.24609 3.32269C2.91604 3.99866 3.46359 4.55114 3.95146 4.94294C4.45879 5.35037 4.97373 5.64531 5.59184 5.72409C5.86287 5.75864 6.13714 5.75864 6.40816 5.72409C7.02628 5.64531 7.54122 5.35037 8.04854 4.94294C8.53641 4.55114 9.08396 3.99867 9.7539 3.32269L11.5327 1.52796Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ChevronRight = () => {
  return (
    <svg
      width={4}
      height={8}
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.52796 0.467309C1.23376 0.175726 0.758893 0.177844 0.467309 0.472041C0.175726 0.766238 0.177844 1.24111 0.472041 1.53269L2.23501 3.28C2.9505 3.98914 3.44131 4.47718 3.77341 4.89071C4.096 5.2924 4.20668 5.55042 4.23613 5.7815C4.25462 5.92659 4.25462 6.07341 4.23613 6.2185C4.20668 6.44958 4.096 6.7076 3.77341 7.10929C3.44131 7.52282 2.9505 8.01086 2.23501 8.72L0.472041 10.4673C0.177844 10.7589 0.175726 11.2338 0.467309 11.528C0.758893 11.8222 1.23376 11.8243 1.52796 11.5327L3.32269 9.7539C3.99866 9.08396 4.55114 8.53641 4.94294 8.04854C5.35037 7.54122 5.64531 7.02628 5.72409 6.40816C5.75864 6.13714 5.75864 5.86286 5.72409 5.59184C5.64531 4.97372 5.35037 4.45878 4.94294 3.95146C4.55114 3.46359 3.99866 2.91604 3.32269 2.24609L1.52796 0.467309Z"
        fill="currentColor"
      />
    </svg>
  );
};

const Mail = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4635 2.37373C16.3214 2.24999 14.8818 2.24999 13.0452 2.25H10.9548C9.11821 2.24999 7.67861 2.24999 6.53648 2.37373C5.37094 2.50001 4.42656 2.76232 3.62024 3.34815C3.13209 3.70281 2.70281 4.13209 2.34815 4.62024C2.18647 4.84277 2.04801 5.07781 1.92987 5.32797C1.56808 6.09404 1.40671 6.98237 1.32806 8.04168C1.25 9.09323 1.25 10.3822 1.25 11.9716V12.0452C1.24999 13.8818 1.24999 15.3214 1.37373 16.4635C1.50001 17.6291 1.76232 18.5734 2.34815 19.3798C2.70281 19.8679 3.13209 20.2972 3.62024 20.6518C4.42656 21.2377 5.37094 21.5 6.53648 21.6263C7.67859 21.75 9.11817 21.75 10.9547 21.75H13.0453C14.8818 21.75 16.3214 21.75 17.4635 21.6263C18.6291 21.5 19.5734 21.2377 20.3798 20.6518C20.8679 20.2972 21.2972 19.8679 21.6518 19.3798C22.2377 18.5734 22.5 17.6291 22.6263 16.4635C22.75 15.3214 22.75 13.8818 22.75 12.0453V11.9709C22.75 10.3707 22.75 9.07486 22.6702 8.01904C22.5899 6.95506 22.4248 6.06379 22.0546 5.29546C21.9399 5.05734 21.8065 4.83304 21.6518 4.62024C21.2972 4.13209 20.8679 3.70281 20.3798 3.34815C19.5734 2.76232 18.6291 2.50001 17.4635 2.37373ZM4.50191 4.56168C5.00992 4.19259 5.66013 3.97745 6.69804 3.865C7.74999 3.75103 9.10843 3.75 11 3.75H13C14.8916 3.75 16.25 3.75103 17.302 3.865C18.3399 3.97745 18.9901 4.19259 19.4981 4.56168C19.8587 4.82369 20.1759 5.14081 20.4379 5.50139L18.5407 7.39861C16.8591 9.08026 15.6501 10.287 14.6072 11.0827C13.5817 11.8651 12.8056 12.1789 12 12.1789C11.1944 12.1789 10.4183 11.8651 9.39275 11.0827C8.34994 10.287 7.14092 9.08026 5.45926 7.3986L3.56205 5.50139C3.82412 5.14081 4.14128 4.82369 4.50191 4.56168ZM21.0373 7.02337C21.0977 7.34361 21.1425 7.70891 21.1745 8.13204C21.2495 9.12493 21.25 10.3648 21.25 12C21.25 13.8916 21.249 15.25 21.135 16.302C21.0225 17.3399 20.8074 17.9901 20.4383 18.4981C20.1762 18.8589 19.8589 19.1762 19.4981 19.4383C18.9901 19.8074 18.3399 20.0225 17.302 20.135C16.25 20.249 14.8916 20.25 13 20.25H11C9.10843 20.25 7.74999 20.249 6.69804 20.135C5.66013 20.0225 5.00992 19.8074 4.50191 19.4383C4.14111 19.1762 3.82382 18.8589 3.56168 18.4981C3.19259 17.9901 2.97745 17.3399 2.865 16.302C2.75103 15.25 2.75 13.8916 2.75 12C2.75 10.3764 2.75047 9.14244 2.82395 8.15274C2.85601 7.72084 2.90131 7.34885 2.96271 7.02337L4.43917 8.49983C6.07144 10.1321 7.35062 11.4113 8.48288 12.2752C9.64181 13.1594 10.7345 13.6789 12 13.6789C13.2655 13.6789 14.3582 13.1594 15.5171 12.2752C16.6494 11.4113 17.9285 10.1321 19.5608 8.49986L21.0373 7.02337Z"
        fill="currentColor"
      />
    </svg>
  );
};

const TimeCircle = () => {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.96852 2.34117C6.29197 2.08242 6.34441 1.61045 6.08565 1.287C5.82689 0.963553 5.35493 0.911112 5.03148 1.16987L2.53148 3.16987C2.20803 3.42863 2.15559 3.9006 2.41435 4.22404C2.67311 4.54749 3.14507 4.59993 3.46852 4.34117L5.96852 2.34117Z"
        fill="currentColor"
      />
      <path
        d="M18.9685 1.16987C18.6451 0.911112 18.1731 0.963553 17.9143 1.287C17.6556 1.61045 17.708 2.08242 18.0315 2.34117L20.5315 4.34117C20.8549 4.59993 21.3269 4.54749 21.5857 4.22404C21.8444 3.9006 21.792 3.42863 21.4685 3.16987L18.9685 1.16987Z"
        fill="currentColor"
      />
      <path
        d="M12.75 8.50552C12.75 8.09131 12.4142 7.75552 12 7.75552C11.5858 7.75552 11.25 8.09131 11.25 8.50552L11.25 12.0055C11.25 13.2482 12.2574 14.2555 13.5 14.2555H15C15.4142 14.2555 15.75 13.9197 15.75 13.5055C15.75 13.0913 15.4142 12.7555 15 12.7555H13.5C13.0858 12.7555 12.75 12.4197 12.75 12.0055L12.75 8.50552Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.75552C6.06294 1.75552 1.25 6.56846 1.25 12.5055C1.25 18.4426 6.06294 23.2555 12 23.2555C17.9371 23.2555 22.75 18.4426 22.75 12.5055C22.75 6.56846 17.9371 1.75552 12 1.75552ZM2.75 12.5055C2.75 7.39689 6.89137 3.25552 12 3.25552C17.1086 3.25552 21.25 7.39689 21.25 12.5055C21.25 17.6142 17.1086 21.7555 12 21.7555C6.89137 21.7555 2.75 17.6142 2.75 12.5055Z"
        fill="currentColor"
      />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM7.47204 17.5327C7.76624 17.8243 8.24111 17.8222 8.53269 17.528C8.82427 17.2338 8.82216 16.7589 8.52796 16.4673L7.47204 17.5327ZM6.23703 15.2527L6.76499 14.72H6.76499L6.23703 15.2527ZM6.23703 8.74731L5.70907 8.21462H5.70907L6.23703 8.74731ZM8.52796 7.53269C8.82216 7.24111 8.82428 6.76624 8.53269 6.47204C8.24111 6.17784 7.76624 6.17573 7.47204 6.46731L8.52796 7.53269ZM4.01989 12.3133L3.27591 12.4082L3.27591 12.4082L4.01989 12.3133ZM4.01989 11.6867L3.27591 11.5918L3.27591 11.5918L4.01989 11.6867ZM20 11.25H4V12.75H20V11.25ZM8.52796 16.4673L6.76499 14.72L5.70907 15.7854L7.47204 17.5327L8.52796 16.4673ZM6.76499 9.28L8.52796 7.53269L7.47204 6.46731L5.70907 8.21462L6.76499 9.28ZM6.76499 14.72C6.0495 14.0109 5.55869 13.5228 5.22659 13.1093C4.904 12.7076 4.79332 12.4496 4.76387 12.2185L3.27591 12.4082C3.35469 13.0263 3.64963 13.5412 4.05706 14.0485C4.45498 14.544 5.01863 15.1011 5.70907 15.7854L6.76499 14.72ZM5.70907 8.21462C5.01863 8.89892 4.45498 9.45597 4.05706 9.95146C3.64963 10.4588 3.3547 10.9737 3.27591 11.5918L4.76387 11.7815C4.79332 11.5504 4.904 11.2924 5.22659 10.8907C5.55869 10.4772 6.0495 9.98914 6.76499 9.28L5.70907 8.21462ZM4.76387 12.2185C4.74538 12.0734 4.74538 11.9266 4.76387 11.7815L3.27591 11.5918C3.24136 11.8629 3.24136 12.1371 3.27591 12.4082L4.76387 12.2185Z"
        fill="currentColor"
      />
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41422 0.585786 6.75 1 6.75L1 5.25ZM17 6.75C17.4142 6.75 17.75 6.41421 17.75 6C17.75 5.58579 17.4142 5.25 17 5.25V6.75ZM13.528 0.467309C13.2338 0.175726 12.7589 0.177844 12.4673 0.472041C12.1757 0.766238 12.1778 1.24111 12.472 1.53269L13.528 0.467309ZM14.763 2.74731L14.235 3.28L14.763 2.74731ZM14.763 9.25269L15.2909 9.78538L14.763 9.25269ZM12.472 10.4673C12.1778 10.7589 12.1757 11.2338 12.4673 11.528C12.7589 11.8222 13.2338 11.8243 13.528 11.5327L12.472 10.4673ZM16.9801 5.68667L17.7241 5.59184V5.59184L16.9801 5.68667ZM16.9801 6.31333L17.7241 6.40816V6.40816L16.9801 6.31333ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75ZM12.472 1.53269L14.235 3.28L15.2909 2.21462L13.528 0.467309L12.472 1.53269ZM14.235 8.72L12.472 10.4673L13.528 11.5327L15.2909 9.78538L14.235 8.72ZM14.235 3.28C14.9505 3.98914 15.4413 4.47718 15.7734 4.8907C16.096 5.2924 16.2067 5.55042 16.2361 5.7815L17.7241 5.59184C17.6453 4.97372 17.3504 4.45878 16.9429 3.95146C16.545 3.45597 15.9814 2.89892 15.2909 2.21462L14.235 3.28ZM15.2909 9.78538C15.9814 9.10108 16.545 8.54403 16.9429 8.04854C17.3504 7.54121 17.6453 7.02628 17.7241 6.40816L16.2361 6.2185C16.2067 6.44958 16.096 6.7076 15.7734 7.10929C15.4413 7.52282 14.9505 8.01086 14.235 8.72L15.2909 9.78538ZM16.2361 5.7815C16.2546 5.92659 16.2546 6.07341 16.2361 6.2185L17.7241 6.40816C17.7586 6.13714 17.7586 5.86286 17.7241 5.59184L16.2361 5.7815Z"
        fill="currentColor"
      />
    </svg>
  );
};

const StarRating = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44347 17.4783L5.11534 19.8562C4.53071 20.1774 3.80762 19.9425 3.50026 19.3316C3.37787 19.0883 3.33564 18.8096 3.3801 18.5387L4.2067 13.5023C4.27324 13.0969 4.14462 12.6833 3.86275 12.3961L0.36122 8.82936C-0.111752 8.34758 -0.12143 7.55634 0.339603 7.06208C0.52319 6.86526 0.763742 6.73717 1.02402 6.69765L5.86302 5.96285C6.25255 5.9037 6.58928 5.64804 6.76348 5.27918L8.92755 0.69694C9.21986 0.0779898 9.93697 -0.176136 10.5293 0.129334C10.7651 0.250974 10.956 0.450471 11.0724 0.69694L13.2365 5.27918C13.4107 5.64804 13.7474 5.9037 14.1369 5.96285L18.9759 6.69765C19.6296 6.7969 20.0825 7.43109 19.9875 8.11414C19.9497 8.38613 19.8271 8.63751 19.6387 8.82936L16.1372 12.3961C15.8554 12.6833 15.7267 13.0969 15.7933 13.5023L16.6199 18.5387C16.7315 19.219 16.2943 19.8651 15.6433 19.9818C15.3841 20.0282 15.1174 19.9841 14.8846 19.8562L10.5565 17.4783C10.2081 17.2869 9.79187 17.2869 9.44347 17.4783Z"
        fill={props.background}
      />
    </svg>
  );
};

const HomeIcon = () => {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5834 16.1146H1.41675C1.12633 16.1146 0.885498 15.8737 0.885498 15.5833C0.885498 15.2929 1.12633 15.0521 1.41675 15.0521H15.5834C15.8738 15.0521 16.1147 15.2929 16.1147 15.5833C16.1147 15.8737 15.8738 16.1146 15.5834 16.1146Z"
        fill="currentColor"
      />
      <path
        d="M2.62109 15.5833H1.55859L1.59401 7.06205C1.59401 6.45997 1.87026 5.9004 2.34484 5.53207L7.30318 1.67165C8.00443 1.12623 8.98901 1.12623 9.69735 1.67165L14.6557 5.52498C15.1232 5.89331 15.4065 6.46705 15.4065 7.06205V15.5833H14.344V7.06914C14.344 6.79998 14.2165 6.5379 14.004 6.3679L9.04568 2.51456C8.72693 2.26665 8.28068 2.26665 7.95485 2.51456L2.99651 6.37499C2.78401 6.53791 2.65651 6.79998 2.65651 7.06914L2.62109 15.5833Z"
        fill="currentColor"
      />
      <path
        d="M12.0416 16.1146H4.95825C4.66784 16.1146 4.427 15.8737 4.427 15.5833V8.85417C4.427 7.97583 5.14242 7.26042 6.02075 7.26042H10.9791C11.8574 7.26042 12.5728 7.97583 12.5728 8.85417V15.5833C12.5728 15.8737 12.332 16.1146 12.0416 16.1146ZM5.4895 15.0521H11.5103V8.85417C11.5103 8.56375 11.2695 8.32292 10.9791 8.32292H6.02075C5.73034 8.32292 5.4895 8.56375 5.4895 8.85417V15.0521Z"
        fill="currentColor"
      />
      <path
        d="M7.08325 13.1042C6.79284 13.1042 6.552 12.8633 6.552 12.5729V11.5104C6.552 11.22 6.79284 10.9792 7.08325 10.9792C7.37367 10.9792 7.6145 11.22 7.6145 11.5104V12.5729C7.6145 12.8633 7.37367 13.1042 7.08325 13.1042Z"
        fill="currentColor"
      />
      <path
        d="M9.5625 5.84375H7.4375C7.14708 5.84375 6.90625 5.60292 6.90625 5.3125C6.90625 5.02208 7.14708 4.78125 7.4375 4.78125H9.5625C9.85292 4.78125 10.0938 5.02208 10.0938 5.3125C10.0938 5.60292 9.85292 5.84375 9.5625 5.84375Z"
        fill="currentColor"
      />
    </svg>
  );
};

const UpdateIcon = () => {
  return (
    <svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 12C1.75 11.5858 1.41421 11.25 1 11.25C0.585786 11.25 0.25 11.5858 0.25 12H1.75ZM20.25 12C20.25 12.4142 20.5858 12.75 21 12.75C21.4142 12.75 21.75 12.4142 21.75 12H20.25ZM3.40041 5.5L3.94041 6.02048L3.95576 6.00456L3.97015 5.98776L3.40041 5.5ZM18.5996 18.5L19.1693 18.9878L19.1786 18.9769L19.1874 18.9658L18.5996 18.5ZM3.01269 1.00335C3.01454 0.589137 2.68025 0.251855 2.26604 0.250007C1.85183 0.248159 1.51455 0.582444 1.5127 0.996654L3.01269 1.00335ZM2.25384 2.98571L1.50384 2.98237L2.25384 2.98571ZM5.93384 6.66571L5.93718 7.41571H5.93718L5.93384 6.66571ZM7.9229 7.40685C8.33711 7.405 8.67139 7.06772 8.66954 6.65351C8.66769 6.2393 8.33041 5.90501 7.9162 5.90686L7.9229 7.40685ZM2.66238 5.90267L2.06926 6.36169L2.06926 6.36169L2.66238 5.90267ZM3.01688 6.25717L2.55786 6.85029L2.55786 6.85029L3.01688 6.25717ZM18.9069 22.9162C18.905 23.3305 19.2393 23.6677 19.6535 23.6696C20.0677 23.6714 20.405 23.3371 20.4069 22.9229L18.9069 22.9162ZM19.6657 20.9339L20.4157 20.9372L19.6657 20.9339ZM15.9857 17.2539L15.9824 16.5039L15.9857 17.2539ZM13.9967 16.5127C13.5824 16.5146 13.2482 16.8519 13.25 17.2661C13.2519 17.6803 13.5891 18.0146 14.0034 18.0127L13.9967 16.5127ZM19.2572 18.0169L19.8503 17.5579V17.5579L19.2572 18.0169ZM18.9027 17.6624L19.3617 17.0693H19.3617L18.9027 17.6624ZM2.82952 6.0923L2.29962 6.62306L2.82952 6.0923ZM11 21.25C5.89137 21.25 1.75 17.1086 1.75 12H0.25C0.25 17.9371 5.06294 22.75 11 22.75V21.25ZM11 2.75C16.1086 2.75 20.25 6.89137 20.25 12H21.75C21.75 6.06294 16.9371 1.25 11 1.25V2.75ZM3.97015 5.98776C5.66782 4.00476 8.18698 2.75 11 2.75V1.25C7.73042 1.25 4.80117 2.71058 2.83068 5.01224L3.97015 5.98776ZM18.0299 18.0122C16.3322 19.9952 13.813 21.25 11 21.25V22.75C14.2696 22.75 17.1988 21.2894 19.1693 18.9878L18.0299 18.0122ZM1.5127 0.996654L1.50384 2.98237L3.00383 2.98906L3.01269 1.00335L1.5127 0.996654ZM5.93718 7.41571L7.9229 7.40685L7.9162 5.90686L5.93049 5.91572L5.93718 7.41571ZM1.50384 2.98237C1.50039 3.75651 1.49638 4.4005 1.55271 4.91635C1.61069 5.44728 1.74029 5.93661 2.06926 6.36169L3.25551 5.44365C3.16534 5.32713 3.08712 5.14976 3.04385 4.75351C2.99893 4.34217 3.00022 3.79848 3.00383 2.98906L1.50384 2.98237ZM5.93049 5.91572C5.12107 5.91933 4.57739 5.92062 4.16604 5.8757C3.76979 5.83243 3.59242 5.75421 3.4759 5.66404L2.55786 6.85029C2.98294 7.17926 3.47227 7.30886 4.0032 7.36684C4.51905 7.42317 5.16304 7.41916 5.93718 7.41571L5.93049 5.91572ZM20.4069 22.9229L20.4157 20.9372L18.9157 20.9305L18.9069 22.9162L20.4069 22.9229ZM15.9824 16.5039L13.9967 16.5127L14.0034 18.0127L15.9891 18.0039L15.9824 16.5039ZM20.4157 20.9372C20.4192 20.1631 20.4232 19.5191 20.3668 19.0032C20.3089 18.4723 20.1793 17.983 19.8503 17.5579L18.664 18.4759C18.7542 18.5925 18.8324 18.7698 18.8757 19.1661C18.9206 19.5774 18.9193 20.1211 18.9157 20.9305L20.4157 20.9372ZM15.9891 18.0039C16.7985 18.0003 17.3422 17.999 17.7535 18.0439C18.1498 18.0872 18.3271 18.1654 18.4437 18.2555L19.3617 17.0693C18.9366 16.7403 18.4473 16.6107 17.9164 16.5528C17.4005 16.4964 16.7565 16.5004 15.9824 16.5039L15.9891 18.0039ZM2.06926 6.36169C2.14048 6.45372 2.21743 6.54101 2.29962 6.62306L3.35942 5.56154C3.32235 5.52454 3.28764 5.48517 3.25551 5.44365L2.06926 6.36169ZM2.29962 6.62306C2.38076 6.70408 2.467 6.77998 2.55786 6.85029L3.4759 5.66404C3.43491 5.63231 3.39601 5.59808 3.35942 5.56154L2.29962 6.62306ZM2.86042 4.97952L2.28952 5.57182L3.36952 6.61279L3.94041 6.02048L2.86042 4.97952ZM19.8503 17.5579C19.7885 17.4781 19.7225 17.4019 19.6524 17.3295L18.5748 18.3729C18.6064 18.4056 18.6362 18.4399 18.664 18.4759L19.8503 17.5579ZM19.6524 17.3295C19.5619 17.2361 19.4648 17.1491 19.3617 17.0693L18.4437 18.2555C18.4902 18.2915 18.534 18.3308 18.5748 18.3729L19.6524 17.3295ZM19.1874 18.9658L19.7015 18.317L18.5258 17.3855L18.0117 18.0342L19.1874 18.9658Z"
        fill="currentColor"
      />
    </svg>
  );
};

const TrashBin = () => {
  return (
    <svg
      width={18}
      height={22}
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <path
        d="M15.5172 11.7795L16.26 11.8829L15.5172 11.7795ZM15.2549 13.6645L15.9977 13.7679L15.2549 13.6645ZM2.74514 13.6645L3.48798 13.5611L2.74514 13.6645ZM2.4828 11.7795L1.73996 11.8829L2.4828 11.7795ZM6.18365 20.7368L5.89206 21.4278L6.18365 20.7368ZM3.47508 17.5603L4.17907 17.3017L3.47508 17.5603ZM14.5249 17.5603L15.2289 17.819V17.819L14.5249 17.5603ZM11.8164 20.7368L11.5248 20.0458H11.5248L11.8164 20.7368ZM2.74664 7.92906C2.70746 7.5167 2.34142 7.21418 1.92906 7.25336C1.5167 7.29254 1.21418 7.65858 1.25336 8.07094L2.74664 7.92906ZM16.7466 8.07094C16.7858 7.65858 16.4833 7.29254 16.0709 7.25336C15.6586 7.21418 15.2925 7.5167 15.2534 7.92906L16.7466 8.07094ZM17 6.75C17.4142 6.75 17.75 6.41421 17.75 6C17.75 5.58579 17.4142 5.25 17 5.25V6.75ZM1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM6.25 17C6.25 17.4142 6.58579 17.75 7 17.75C7.41421 17.75 7.75 17.4142 7.75 17H6.25ZM7.75 9C7.75 8.58579 7.41421 8.25 7 8.25C6.58579 8.25 6.25 8.58579 6.25 9H7.75ZM10.25 17C10.25 17.4142 10.5858 17.75 11 17.75C11.4142 17.75 11.75 17.4142 11.75 17H10.25ZM11.75 9C11.75 8.58579 11.4142 8.25 11 8.25C10.5858 8.25 10.25 8.58579 10.25 9H11.75ZM13 6V6.75H13.75V6H13ZM5 6H4.25V6.75H5V6ZM14.7744 11.6761L14.512 13.5611L15.9977 13.7679L16.26 11.8829L14.7744 11.6761ZM3.48798 13.5611L3.22564 11.6761L1.73996 11.8829L2.0023 13.7679L3.48798 13.5611ZM9 20.25C7.47083 20.25 6.92544 20.2358 6.47524 20.0458L5.89206 21.4278C6.68914 21.7642 7.60558 21.75 9 21.75V20.25ZM2.0023 13.7679C2.282 15.7777 2.43406 16.9017 2.77109 17.819L4.17907 17.3017C3.91156 16.5736 3.77851 15.6488 3.48798 13.5611L2.0023 13.7679ZM6.47524 20.0458C5.55279 19.6566 4.69496 18.7058 4.17907 17.3017L2.77109 17.819C3.3857 19.4918 4.48205 20.8328 5.89206 21.4278L6.47524 20.0458ZM14.512 13.5611C14.2215 15.6488 14.0884 16.5736 13.8209 17.3017L15.2289 17.819C15.5659 16.9017 15.718 15.7777 15.9977 13.7679L14.512 13.5611ZM9 21.75C10.3944 21.75 11.3109 21.7642 12.1079 21.4278L11.5248 20.0458C11.0746 20.2358 10.5292 20.25 9 20.25V21.75ZM13.8209 17.3017C13.305 18.7058 12.4472 19.6566 11.5248 20.0458L12.1079 21.4278C13.5179 20.8328 14.6143 19.4918 15.2289 17.819L13.8209 17.3017ZM3.22564 11.6761C3.00352 10.08 2.83766 8.88703 2.74664 7.92906L1.25336 8.07094C1.34819 9.06897 1.51961 10.2995 1.73996 11.8829L3.22564 11.6761ZM16.26 11.8829C16.4804 10.2995 16.6518 9.06896 16.7466 8.07094L15.2534 7.92906C15.1623 8.88702 14.9965 10.08 14.7744 11.6761L16.26 11.8829ZM17 5.25H1V6.75H17V5.25ZM7.75 17V9H6.25V17H7.75ZM11.75 17V9H10.25V17H11.75ZM12.25 5V6H13.75V5H12.25ZM13 5.25H5V6.75H13V5.25ZM5.75 6V5H4.25V6H5.75ZM9 1.75C10.7949 1.75 12.25 3.20507 12.25 5H13.75C13.75 2.37665 11.6234 0.25 9 0.25V1.75ZM9 0.25C6.37665 0.25 4.25 2.37665 4.25 5H5.75C5.75 3.20507 7.20507 1.75 9 1.75V0.25Z"
        fill="#F74B4B"
      />
    </svg>
  );
};

const ViewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0
 0 512 512"
    >
      <title>Eye</title>
      <path
        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="256"
        cy="256"
        r="80"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
    </svg>
  );
};

const SaveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 512 512"
    >
      <title>Save</title>
      <path
        d="M380.93 57.37A32 32 0 00358.3 48H94.22A46.21 46.21 0 0048 94.22v323.56A46.21 46.21 0 0094.22 464h323.56A46.36 46.36 0 00464 417.78V153.7a32 32 0 00-9.37-22.63zM256 416a64 64 0 1164-64 63.92 63.92 0 01-64 64zm48-224H112a16 16 0 01-16-16v-64a16 16 0 0116-16h192a16 16 0 0116 16v64a16 16 0 01-16 16z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 512 512"
    >
      <title>Create</title>
      <path
        d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" />
    </svg>
  );
};

const OrderIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      viewBox="0 0 512 512"
    >
      <title>Clipboard</title>
      <path
        d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <rect
        x={176}
        y={32}
        width={160}
        height={64}
        rx="26.13"
        ry="26.13"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  );
};

export default Icons;
export {
  Github,
  Account,
  Calling,
  CandyMenu,
  Cart,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  EditIcon,
  Facebook,
  Dribbble,
  FilledHeart,
  Twitter,
  Heart,
  HomeIcon,
  Instagram,
  LeftArrow,
  Mail,
  OrderIcon,
  Place,
  SaveIcon,
  Search,
  StarRating,
  RightArrow,
  TimeCircle,
  TrashBin,
  UpdateIcon,
  ViewIcon,
  Whatsapp,
  YouTube,
};