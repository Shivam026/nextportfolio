import React from 'react'
import Link from "next/link";
function Email() {
  return (
    <div className='email'> 
    <Link href="mailto:ishivams2@gmail.com" className="email-link">
    ishivams2@gmail.com
    </Link>
    </div>
  )
}

export default Email