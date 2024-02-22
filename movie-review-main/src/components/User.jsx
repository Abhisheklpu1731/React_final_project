import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Assuming you install react-hook-form

const User = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Send form data to your server-side API here
    console.log(data);
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            {...register('username', { required: true, minLength: 3 })}
            placeholder="Enter your username"
          />
          {errors.username && <span>Username is required and must be at least 3 characters.</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
            placeholder="Enter your email address"
          />
          {errors.email && <span>Please enter a valid email address.</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true, minLength: 8 })}
            placeholder="Enter your password"
          />
          {errors.password && <span>Password is required and must be at least 8 characters.</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
