import useJsonFetch from "./hooks/useJsonFetch";

function CompError() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  if(error !== null) {
    return (
      <>
        <div className='compData'>2 - Error: {error}</div>
      </>
    )
  }
}

export default CompError;