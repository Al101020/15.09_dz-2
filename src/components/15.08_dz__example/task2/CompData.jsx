import useJsonFetch from "./hooks/useJsonFetch";

function CompData() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/data');

  if(data !== null) {
    return (
      <>
        <div className='compData'>1 - Data: {data.status}</div>
      </>
    )
  }
}

export default CompData;
