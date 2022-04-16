import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

//box to input number and checks number if prime.
function CheckPrime() {
    const [number, setNumber] = React.useState('');
    const [isPrime, setIsPrime] = React.useState(false);
    
    const handleChange = (event) => {
        setNumber(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let num = parseInt(number);
        let isPrime = true;
        for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
        }
        setIsPrime(isPrime);
    };
    
    return (
        <>
            <TextField id="outlined-basic" label="Enter a Number" variant="outlined" value={number} onChange={handleChange}  />
           
            <Button variant="contained" onClick={handleSubmit}>Sub</Button>
            
            {isPrime===true ? <div>{number} is prime</div> : <div>{number} is not prime</div>}
        </>
    );
    }

    export default CheckPrime;