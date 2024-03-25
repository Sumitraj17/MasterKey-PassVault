import { Box,Card } from "@mui/material";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { IoLogIn } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormComponent = ({ trigger, onChange }) => {
  const handleSubmit = async (event) => {
    console.log("Form submitted!"); // Log form submission
    onChange(!trigger); // Assuming trigger is a boolean state for form visibility

    event.preventDefault(); // Prevent default form behavior

    const formData = new FormData(event.currentTarget);

    console.log("formData:", formData); // Log entire FormData object (for debugging)

    const bank_name = formData.get("bank_name");
    console.log("bank_name:", bank_name); // Log individual values

    const card_type = formData.get("card_type");
    console.log("card_type:", card_type);

    const mpin = formData.get("mpin");
    console.log("mpin:", mpin);

    const pin = formData.get("pin");
    console.log("pin:", pin);

    // Replace with your actual API endpoint URL
    const apiUrl = '/api/addCard'; // Assuming a POST request

    try {
      const response = await axios.post(apiUrl, {
        bank_name,
        card_type,
        mpin,
        pin,
      });

      console.log('Card added successfully:', response.data); // Handle successful response
      toast('Card Added!', {
        type: 'success',
      });
    } catch (error) {
      console.error('Error adding card:', error);
      toast('Failed to add card. Please check your details and try again.', {
        type: 'error',
      });
    }
  };

  return (
    <>
      <Box className="flex flex-col justify-center items-center text-1xl font-bold">
        <Box
          sx={{
            border: "1px solid #ddd",
            padding: "10px",
            background: "lightblue",
            margin: "10px",
          }}
          className=" rounded-2xl md:w-1/2 " // Responsive width for inner box
        >
          <form onSubmit={handleSubmit} className="p-3 ">
            <InputLabel sx={{ textAlign: "center", margin: "2px" }}>
              Add a new Card
            </InputLabel>
            <div className="flex justify-between p-2">
              <label>Bank Name</label>
              <input
                type="text"
                name="bank_name"
                placeholder="Bank_name"
                label="Bank Name"
                className="bg-white border border-solid border-2 text-black-500 text-1xl p-1 w-2/3 "
              />
            </div>
            <div className="flex justify-between p-2">
              <label>Card Type</label>
              <input
                type="text"
                name="card_type"
                placeholder="Card type"
                label="Card type"
                className="bg-white border border-solid border-2 text-black-500 text-1xl p-1 w-2/3 "
              />
            </div>
            <div className="flex justify-between p-2">
              <label>MPin</label>
              <input
                name="mpin"
                type="Number"
                label="MPin"
                placeholder="MPin"
                className="bg-white border border-solid border-2 text-black-500 text-1xl p-1 w-2/3 "
              />
            </div>
            <div className="flex justify-between p-2">
              <label>Atm Pin</label>
              <input
                name="pin"
                type="Number"
                label="Atm Pin"
                placeholder="AtmPin"
                className="bg-white border border-solid border-2 text-black-500 text-1xl p-1 w-2/3 "
              />
            </div>
            <Button
              type="submit"
              sx={{
                px: 2,
                py: 1,
                mt: 2,
                borderRadius: 2,
                bgcolor: "white",
              }}
              endIcon={<IoLogIn />}
              className="hover:bg-blue-500 hover:text-white w-full " // Responsive button width
            >
              Add
            </Button>
          </form>
        </Box>
      </Box>
      
    </>
  );
};

export default FormComponent;