import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    return redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          defaultValue="john"
        />
      </div>

      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          defaultValue="smilga"
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="test@test.com"
          className="form-input"
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-block">
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </Form>
  );
};

export default NewsLetter;
