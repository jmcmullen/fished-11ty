import React from 'react'

export default React.forwardRef(({ ...props }, ref) => {
  return <nav ref={ref} {...props} />
})
