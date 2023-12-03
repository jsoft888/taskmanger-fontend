import './registration.scss';
const Signup = () => {
    return (
    <div className='signup-form'>
        <div className='signup-form__wrapper'>
            <form className='form'>
            <div className='form-group'>
           <input type='text' placeholder='Enter Name' />
           </div>
           <div className='form-group'>
              <input 
                   type='email' 
                   name='Enter Name' 
                   id='' 
                   placeholder='Enter Email'
                   />
            </div>
            <div className='form-group'>
              <input 
                    type='password' 
                    name='Enter password' 
                    id='' 
                    placeholder='Enter Password' 
                />
              </div>
              <div className='form-group'>
                   <button>Sign Up</button>
              </div>
            </form>
         
          
          </div>
        
    </div>
    );
};


export default Signup;