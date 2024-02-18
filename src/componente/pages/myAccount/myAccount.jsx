import React from "react";
import "./muAccount.css";
import * as yup from "yup";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

import { userAccount } from "./validationAccount";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function MyAccount() {
  const [openSide, setOpenSide] = useState(false);
  const [closeSide, setCloseSide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userAccount),
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="containerMyAccount">
      <div className="topTitleAccount">
        <p>
          <TiThMenu
            className="iconMenuAccount"
            onClick={() => {
              setOpenSide(!openSide);
              setCloseSide(!closeSide);
            }}
          />
          <span>Home</span>/ My Account
        </p>
        <p>
          Welcome! <span>MD Rime !</span>
        </p>
      </div>
      <div className="myAccountBox">
        <div
          className={openSide ? "columnAccount rightActive" : "columnAccount"}
        >
          <div>
            <IoCloseCircle
              className="inconCloseAccount"
              onClick={() => {
                setOpenSide(!openSide);
                setCloseSide(!closeSide);
              }}
            />

            <h4>Manage My Account</h4>
            <ul>
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div>
            <h4>Manage Orders</h4>
            <ul>
              <li>My Returns</li>
              <li>Address Concellations</li>
            </ul>
          </div>
          <div>
            <h4>Manage Orders</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="columnAccountEdit">
          <h3>Edit Your Profile</h3>
          <div className="firstInputAccount">
            <div className="first">
              <label>First Name</label>
              <input type="text" placeholder="MD" {...register("firstName")} />
              <p className="errorForm">{errors.firstName?.message}</p>
            </div>
            <div className="first">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Rimel"
                {...register("lastName")}
              />
              <p className="errorForm">{errors.lastName?.message}</p>
            </div>
            <div className="first">
              <label>Email</label>
              <input
                type="text"
                placeholder="rimel@mail.com"
                {...register("email")}
              />
              <p className="errorForm">{errors.email?.message}</p>
            </div>
            <div className="first">
              <label>Address</label>
              <input
                type="text"
                placeholder="Kingston\5236 United State"
                {...register("address")}
              />
              <p className="errorForm">{errors.address?.message}</p>
            </div>
          </div>
          <div className="boxPasswordAccount">
            <label> Password Changes</label>

            <input
              type="password"
              placeholder="Current Password"
              {...register("currentPassword ")}
            />
            <input
              type="password"
              placeholder="New Password"
              {...register("Password")}
            />
            <p className="errorForm">{errors.Password?.message}</p>
            <input
              type="password"
              placeholder="Confirm New Password"
              {...register("confirmPassword")}
            />
            <p className="errorForm">{errors.confirmPassword?.message}</p>
          </div>
          <div className="btnAccount">
            <button className="btnAccountCancel">Cancel</button>
            <button className="btnAccountSave">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
