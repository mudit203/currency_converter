import React from 'react';
import { useState } from 'react';
import InputBox from './components/InputBox';
import Usecurrencyinfo from './Hooks/Usecurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = Usecurrencyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
    
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        //backgroundColor:''
      }}
    >
       <div className='bg-white'>
      <h1 className='text-black font-extrabold text-4xl'>CURRENCY CONVERTER</h1>
      </div>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-orange-500 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                CurrencyOptions={options}
                OnCurrencyChange={setFrom}
                selectCurrency={from}
                OnAmountChange={setAmount}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                CurrencyOptions={options}
                OnCurrencyChange={setTo}
                selectCurrency={to}
                AmountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <div className='bg-white'>
      <h1 className='text-black font-extrabold'>MADE BY MUDIT SHARMA</h1>
      </div>
    </div>
  );
}

export default App;
