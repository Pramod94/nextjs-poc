import headerStyle from "./header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <div className={headerStyle.headerWrapper}>
      <div className={headerStyle.header}>
        {/* Make use of Image from next while rendering images. This helps to lazy load images
        and comes with lot of props which helps to optimize the images while rendering the page */}
        <Image src={logo} width={100} height={100} alt="logo" priority />
        <h1>From Home Page!!!</h1>
      </div>
    </div>
  );
}
