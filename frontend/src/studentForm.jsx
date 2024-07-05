import React from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("studentId", data.studentId);
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("roomNumber", data.roomNumber);
    formData.append("image", data.image[0]);
    formData.append("file", data.file[0]);

    try {
      const response = await fetch("http://localhost:5000/api/student", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label>Student ID</label>
        <input type="text" {...register("studentId", { required: true })} />
        {errors.studentId && <p>Student ID is required</p>}
      </div>

      <div>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>

      <div>
        <label>Age</label>
        <input type="number" {...register("age", { required: true, min: 1 })} />
        {errors.age && <p>Age is required and must be greater than 0</p>}
      </div>

      <div>
        <label>Student Room Number</label>
        <input type="text" {...register("roomNumber", { required: true })} />
        {errors.roomNumber && <p>Student Room Number is required</p>}
      </div>

      <div>
        <label>Upload Image</label>
        <input type="file" {...register("image", { required: true })} />
        {errors.image && <p>Image is required</p>}
      </div>

      <div>
        <label>Upload File</label>
        <input type="file" {...register("file", { required: true })} />
        {errors.file && <p>File is required</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
