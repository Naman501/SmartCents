import {UserButton} from '@clerk/nextjs'

import React from 'react'

function DashboardHeader(){
    return(
        <div className='p-5 sh-sm border-b flex justify-between'>
<div>

</div>
<div>
    <UserButton afterSignOut={() => {
            router.push('/');
          }} />
</div>
        </div>
    )
}

export default DashboardHeader;