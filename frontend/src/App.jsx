import FormComponent from "./components/form.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./components/cards.jsx";
import { Box } from "@mui/material";
import {  toast } from "react-toastify";
import { PASSWORD } from "./constant.js";

function App() {
  const [cards, setCards] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [valid , setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData(event.currentTarget);
    const password = formdata.get("password");
    if (password === PASSWORD) {
      toast("LogIn Successful", {
        type: "success",
        autoClose: 2000,
      });
      setValid(true);
    } else {
      toast("LogIn Unsuccessful", {
        type: "error",
        autoClose: 2000,
      });
      setValid(false)
    }
  };
  useEffect(() => {
    axios
      .get("/api/fetch")
      .then((response) => {
        console.log(response);
        setCards(response.data);
      })
      .catch((err) => {
        console.log("Error " + err);
      });
  }, [trigger]);

  return (
    <>
      {!valid && (
        <Box
          className="flex flex-col justify-center items-center text-1xl font-bold"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              textAlign: "center",
              background: "lightblue",
              padding: "10px",
              margin: "15px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="password"
                placeholder="PASSWORD"
                className="text-1xl p-4 m-3 "
              />
              <button
                className=" p-4 m-3 bg-white text-blue-300 hover:bg-blue-500 hover:text-white text-2xl text-center rounded-2xl"
                type="submit"
              >
                Enter
              </button>
            </form>
          </Box>
        </Box>
      )}
      {valid && (
        <div>
          <h1 className="text-black-500 font-bold italic text-center text-5xl m-4">
            MasterKey PassVault
          </h1>
          <FormComponent trigger={trigger} onChange={setTrigger} />
          <CardComponent
            cards={cards}
            trigger={trigger}
            onChange={setTrigger}
          />
        </div>
      )}
    </>
  );
}

export default App;
