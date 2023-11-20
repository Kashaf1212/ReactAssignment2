import React from 'react'
//  import '../csscomponents/contact.css';

function Contact() {
  return (
  <>


<div class="container">
    <div class="form-control">

      <form>
        <h1> Login Form</h1>
        <div>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div>
          <input type="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="number" placeholder="Enter Your Lucky Number"/>
        </div>
        <div class="gender-property">
          <label>Gender: </label> <input type="radio" name="radio1" />

          <label>Male</label>
          <input type="radio" name="radio1"/>
          <label>Female</label>
        </div>
        <div class="checkbox-property">
          <label for="">All terms and conditions are accepted</label>
          <input type="checkbox"/>
        </div>
        <div>
          <input type="datetime-local"/>
        </div>
        <div>
          <input type="file" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>


      </form>
    </div>

  </div>
  </>
  )
}

export default Contact
