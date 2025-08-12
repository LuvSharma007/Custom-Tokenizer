'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { createTokenizer } from '@/helpers/generateVacab'; // import from tokenizer.js
import { Input } from '@/components/ui/input';

export default function HomePage() {


    const tokenizer = useMemo(()=>createTokenizer(),[]);

    const [encodeInput , setEncodedInput] = useState("")
    const [encoded , setEncoded] = useState([])
    
    const [decodeInput, setDecodedInput] = useState("");
    const [decoded , setDecoded] = useState("");


  useEffect(()=>{
    const text = (encodeInput || "").trim()
    if(!text){
        setEncoded([])
        return;
    }
    
    tokenizer.buildVocabFromText(text);
    setEncoded(tokenizer.encode(text))
  },[encodeInput,tokenizer])


  useEffect(()=>{
    const input = (decodeInput || "").trim()
    if(!input){
        setDecoded("")
        return;
    }
    const tokens = input.split(/\s+/).map(num=>parseInt(num,10));
    setDecoded(tokenizer.decode(tokens))
  },[decodeInput , tokenizer])

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-7xl'>Custom Tokenizer</h1>
        <div>
            <h1 className='text-2xl m-10 text-center'>Encode</h1>
            <Input
            type='text'
            value={encodeInput}
            onChange={(e)=>setEncodedInput(e.target.value)}
            className="w-150 h-15 font-medium"
            placeholder="Enter Text"
            />
            <textarea name="encoded" id="encoded"
            className='w-150 h-15 border-2 mt-5'
            value={encoded.join(" ")}
            readOnly
            ></textarea>
        </div>
        <div>
            <h1 className='text-2xl m-10 text-center'>Decode</h1>
            <Input
            type='text'
            value={decodeInput}
            onChange={(e)=>setDecodedInput(e.target.value)}
            className="w-150 h-15 font-medium"
            placeholder="Enter Tokens"
            />
            <textarea name="decoded" id="decoded"
            className='w-150 h-15 border-2 mt-5'
            value={decoded}
            readOnly
            ></textarea>
        </div>
        
    </div>
  )
}
