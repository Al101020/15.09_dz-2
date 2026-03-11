import useJsonFetch from "./hooks/useJsonFetch";

function CompLoading() {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

  if(loading === false) {
    return (
      <>
        <div className='compData'>3 - Loading: False</div>
      </>
    )
  } else {
    return (
      <>
        <div className='compData'>3 - Loading: True</div>
      </>
    )
  }
}

export default CompLoading;