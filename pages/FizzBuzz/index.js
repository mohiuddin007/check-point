import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

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
    <div>FizzBuzz
        <Row className='justify-content-center'>  
         <Col md={12} >
           <div className='border border-secondary rounded p-4'>
             <h2 className='text-center'>Palindrome Checker</h2>
              <form onSubmit={palindromeChecker}>
                <label htmlFor="name">Write your text</label>
                <textarea type="text" id='name' autoComplete='name' placeholder='Write your text here' className='form-control'/>
                <Button type='submit' variant="secondary">Submit</Button>
              </form>
              <div className='mt-3 border border-secondary'>
                  {
                    // isPalindrome === true && textField != '' ? <h4 className='text-success'>Yah, It&apos;s a palindrome!</h4>
                    //   : (isPalindrome === false && textField != '') && <h4 className='text-danger'>Sorry, that&apos;s not a palindrome.</h4>
                    }
              </div> 
           </div>
            
         </Col>
       </Row>
    </div>
  )
}
