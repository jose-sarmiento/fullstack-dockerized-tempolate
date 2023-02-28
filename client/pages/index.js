export default function Home({message}) {
  return (
    <>
      <h1>test 2</h1>
      <h2 className="">{message.Hello}</h2>
    </>
  )
}

export const getStaticProps = async function () {
  // try {
      const response = await fetch('http://server:3001/');
      const data = await response.json();
      
      return {
        props: {
          message: data
        }
      }

  // } catch (err) {
  //   return {
  //     props: {
  //       message: {
  //         Hello: err.message
  //       }
  //     }
  //   }
  // }
}