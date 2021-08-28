import React, { useState } from 'react'
import { FormWrapper, Form, Input, SearchButton } from '../styles/components/FormCity'
import { BiSearchAlt } from "react-icons/bi"

const FormCity = ({ setInputCity}) => {

     const [input, setInput] = useState('')

     const submitHandler = (e) => {
          e.preventDefault()
          setInputCity(input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(" ", ''))
     }

     return (
          <FormWrapper>
               <Form onSubmit={submitHandler}>
                    <Input placeholder='enter your city'
                         value={input}
                         onChange={(e) => setInput(e.target.value)}
                    />
                    <SearchButton type='submit'>
                         <BiSearchAlt />
                    </SearchButton>
               </Form>
          </FormWrapper>
     )
}

export default FormCity
