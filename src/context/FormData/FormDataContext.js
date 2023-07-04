import { createContext, useState, useContext, useEffect } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [isSignupOneCompleted, setIsSignupOneCompleted] = useState(false);

  // Retrieve data from localStorage on initial render
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
    }

    const storedImageURL = localStorage.getItem("imageURL");
    if (storedImageURL) {
      setImageURL(storedImageURL);
    }
  }, []);

  const updateFormData = (newData) => {
    setFormData((prevState) => {
      const updatedFormData = { ...prevState, ...newData };
      localStorage.setItem("formData", JSON.stringify(updatedFormData)); // Store in localStorage
      return updatedFormData;
    });

    setIsSignupOneCompleted(true);
  };

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, isSignupOneCompleted }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
