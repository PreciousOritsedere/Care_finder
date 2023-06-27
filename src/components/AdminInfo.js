import Image from "next/image";
import Link from "next/link";
import style from "../styles/adminInfo.module.css";
import UserIcon from "../../public/assets/register/user icon.svg";
import Camera from "../../public/assets/register/camera.svg";
import Right_Arrow from "../../public/assets/register/right arrow.svg";
import Input from "./common/Input";
import Button from "./common/Button";

export default function AdminInfo() {
  return (
    <section className={style.container}>
      <h1>Administrator</h1>

      <form>
        <div className={style.userImage_cont}>
          <Image src={UserIcon} alt="user icon" />
          <div className={style.camIcon_cont}>
            <Image src={Camera} alt="camera icon" />
          </div>
        </div>

        <div className={style.form}>
          <div className={style.form_input}>
            <Input type="text" placeholder="First Name" />
          </div>
          <div className={style.form_input}>
            <Input type="text" placeholder="Surname" required />
          </div>
          <div className={style.form_input}>
            <Input type="tel" placeholder="Phone No" required />
          </div>
          <div className={style.form_input}>
            <Input type="email" placeholder="Email" required />
          </div>
          <div className={style.form_input}>
            <Input type="position" placeholder="Position" required />
          </div>
        </div>
        <button className={style.add_new}>Add New Administrator</button>

        <div className={style.link_wrapper}>
          <Link href="/health_center/signup_two" className={style.button_cont}>
            <Button
              //   onClick={someFunction}
              text="Continue"
              //   className="custom-class"
            />
            <Image src={Right_Arrow} alt="right arrow" />
          </Link>
        </div>
      </form>
    </section>
  );
}
