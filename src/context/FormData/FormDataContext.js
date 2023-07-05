import { createContext, useState, useContext, useEffect } from "react";

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageURL, setImageURL] = useState(null);
  const [isSignupOneCompleted, setIsSignupOneCompleted] = useState(false);

  // Retrieve data from localStorage on initial render
  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem("formData"));
    if (storedFormData) {
      setFormData(storedFormData);
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

  // Log formData to the console whenever it changes
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <FormDataContext.Provider
      value={{
        formData,
        updateFormData,
        isSignupOneCompleted,
        imageURL,
        setImageURL,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
