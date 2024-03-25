
import { Box } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function CardComponent({cards,trigger,onChange}) {
    const handleSubmit = (key) =>{
        console.log('clicked')
        console.log(key)
        axios.delete(`/api/update/${key}`)
        .then((response)=>{
            onChange(!trigger);
            toast('Card Deleted!', {
                type: 'success', // Can be 'success', 'info', 'warning', or 'error'
                // position: 'top-right', // Can be 'top-left', 'top-center', 'bottom-left', 'bottom-center', or 'bottom-right'
                // autoClose: 2000, // Automatically close after 5 seconds (optional)
                // hideProgressBar: true, // Hide the progress bar (optional)
              });
        })
        .catch((err)=>{
            console.log('err '+err);
            toast('Error Occured!', {
                type: 'error', // Can be 'success', 'info', 'warning', or 'error'
                // position: 'top-right', // Can be 'top-left', 'top-center', 'bottom-left', 'bottom-center', or 'bottom-right'
                // autoClose: 2000, // Automatically close after 5 seconds (optional)
                // hideProgressBar: true, // Hide the progress bar (optional)
              });
        })
    }

  return (
    <>
      <Box>
      <h2 className="text-center italic text-5xl p-3 m-3 ">Card Details</h2>
        <Box className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-3xl shadow-blur-4 shadow-black"
            sx={{
                border:'2px solid black',
                padding:'10px',
                margin:'25px',
                background:'antiquewhite'
            }}
        >
          {cards.length > 0 && // Use cards.length > 0 for clarity
            cards.map((card, index) => (
              <Box key={index} 
                sx={{
                    border:'1px solid black',
                    padding:'15px',
                    margin:'15px',
                    background:'white'
                }}
                className="flex flex-col justify-center items-center text-2xl "
              >
                <p><span  className="font-bold italic p-1">Bank_Name:-</span> {card.BANK_NAME}</p>
                <h2> <span className="font-bold italic p-1">Card_Type:-</span> {card.CARD_TYPE}</h2>
                <p><span className="font-bold italic p-1">MPin:-</span> {card.MPIN}</p>
                <p><span className="font-bold italic p-1">Pin:-</span>:- {card.PIN}</p>
                <button className="bg-red-500 rounded-2xl w-full m-3 text-center text-white hover:bg-red-300" onClick={()=> handleSubmit(card.BANK_NAME+card.CARD_TYPE)} >Delete</button>
              </Box>
            ))}
        </Box>
        {cards.length === 0 && (
          <Box className="flex justify-center items-center m-4 text-2xl">
            <Box
              sx={{
                border: "1px solid black",
                padding: "15px",
                margin: "10px"
              }}
              className="w-1/2 text-center shadow-2xl rounded-2xl"
            >
              No Details Available
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default CardComponent;
