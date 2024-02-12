import React, { useEffect, useState } from "react";
import Upload from "../Images/upload.jpg"

const AddUserModal = ({setModalOpen}) => {


  const [upLoadedImage, setUpLoadedImage] = useState({});
  const [prvImg, setPrvImg] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setDisableButton(true);
    setUpLoadedImage(selectedImage)

    setPrvImg(URL.createObjectURL(selectedImage));
  };

  const handleImageUpload = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      userImage: upLoadedImage,
      email: form.email.value,
      address: {
        address: form.street.value,
        city: form.city.value,
        state: form.state.value,
      },
    };
    console.log(data);
  };

  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between flex-col md:flex-row-reverse">
          <div className="flex-1 py-5">
           {
            prvImg===''? <img src={Upload} alt="empty image" className="w-[30rem] rounded-full"  />:  <img src={prvImg} alt="uploaded image" className="w-[30rem] rounded-full" />
           }
          </div>
          <div className="flex-1 p-[1rem_1.5rem]  rounded-2xl ">
            <h1 className="text-black text-4xl font-thin mb-4 text-center">
              Add User
            </h1>
            <form action="" onSubmit={handleImageUpload} id="productAdd">
              {/*First name */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="firstName"
                  name="firstName"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                  placeholder="First Name"
                  required
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                >
                  First Name
                </label>
              </div>

              {/*Last name */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="lastName"
                  name="lastName"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                  placeholder="Last Name"
                  required
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                >
                  Last Name
                </label>
              </div>

              {/*email */}
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                >
                  Email
                </label>
              </div>

              <div className="flex gap-2">
                {/*Street */}
                <div className="form-control relative my-6 w-full ">
                  <input
                    autoComplete="off"
                    id="street"
                    name="street"
                    type="name"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                    placeholder="Street"
                    required
                  />
                  <label
                    htmlFor="street"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    Street
                  </label>
                </div>
                {/*City */}
                <div className="form-control relative my-6 w-full">
                  <input
                    autoComplete="off"
                    id="city"
                    name="city"
                    type="name"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                    placeholder="City"
                    required
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    City
                  </label>
                </div>{" "}
                {/*State */}
                <div className="form-control relative my-6 w-full">
                  <input
                    autoComplete="off"
                    id="state"
                    name="state"
                    type="name"
                    className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-black/50 border-b-2"
                    placeholder="State"
                    required
                  />
                  <label
                    htmlFor="state"
                    className="absolute left-0 -top-3.5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm"
                  >
                    State
                  </label>
                </div>
              </div>

              {/* User Image */}
              <div className="form-control relative my-6 ">
                <label htmlFor="email" className="text-black">
                  Upload User Image
                </label>
                <input
                  accept="image/*"
                  onChange={handleImageChange}
                  type="file"
                  className=" w-full  border-t-0 border-l-0 border-r-0 rounded-none border-b-2 text-black text-sm border-b-black/50"
                />
              </div>
            </form>
            <button
              form="productAdd"
              type="submit"
              disabled={disableButton}
              className="ml-2 py-2 px-4 border border-black text-black"
            >
              Submit
            </button>
            <button
              className="ml-2 py-2 px-4 border border-black text-black"
              onClick={()=>setModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
