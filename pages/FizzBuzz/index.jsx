import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Layout = dynamic(() => import('../../layouts/layout'));

export default function FizzBuzz() {
    const [textField, setTextField] = useState('')
  const [isPalindrome, setIsPalindrome] = useState(false);

  const palindromeChecker = async (e) => {
       e.preventDefault();
       const inputText = {
         name: e.target.name.value
       }
       setTextField(inputText.name);

       const reversedText = inputText.name.split('').reverse().join('');
       if(inputText.name === reversedText){
          setIsPalindrome(true);
       }else{
        setIsPalindrome(false);
       }
  }
  
  return (
    <Layout>
      <div>FizzBuzz
          <div className='justify-content-center'>  
          <div >
            <div className='border border-secondary rounded p-4'>
              <h2 className='text-3xl text-green-600 p-2'>Palindrome Checker</h2>
                <form onSubmit={palindromeChecker}>
                  <label htmlFor="name">Write your text</label>
                  <textarea type="text" id='name' autoComplete='name' placeholder='Write your text here' className='form-control'/>
                  <button type='submit' variant="secondary">Submit</button>
                </form>
                <div className='mt-3 border border-secondary'>
                    {
                      // isPalindrome === true && textField != '' ? <h4 className='text-success'>Yah, It&apos;s a palindrome!</h4>
                      //   : (isPalindrome === false && textField != '') && <h4 className='text-danger'>Sorry, that&apos;s not a palindrome.</h4>
                      }
                </div> 
            </div>
              
          </div>
        </div>
      </div>
    </Layout>
  )
}
