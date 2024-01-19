import * as React from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../../utils/api';

function EmailVerify() {
  const { token } = useParams();
  const [ isEmailVerified, setIsEmailVerified ] = React.useState(false);

  React.useEffect(() => {
    async function verifyEmail() {
      const result = await api.get(`/users/verify-email/${token}`);
      setIsEmailVerified(result.data.emailVerified);
    }

    verifyEmail();
  }, [])

  return (
    <div className='flex flex-col justify-center bg-[#2c3e50] text-white text-center h-full fixed top-0 right-0 left-0 bottom-0'>
        {isEmailVerified ? (<>
            <h1 className='text-5xl my-6'>Email Verified Successfully</h1>
            <h1 className='text-5xl my-6'>Go to login page</h1>
            <Link to={'/auth/login'} className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-2xl w-[200px] mx-auto my-5'>Login</Link>
          </>) : (<>
            <h1 className='text-5xl my-6'>Email Verification Failed</h1>
            <h1 className='text-5xl my-6'>Go to login page and retry</h1>
            <Link to={'/auth/login'} className='bg-[#0088cc] text-white py-3 px-6 rounded-lg text-2xl w-[200px] mx-auto my-5'>Login</Link>
          </>)
        }
    </div>
  )
}

export default EmailVerify;