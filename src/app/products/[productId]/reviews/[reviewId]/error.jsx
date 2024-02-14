'use client'

const ErrorBoundary = ({error ,reset}) => {
  return (
    <>
    <div>{error.message}</div>
    <button onClick={reset}>Try Again</button>
    </>
    
  )
}

export default ErrorBoundary