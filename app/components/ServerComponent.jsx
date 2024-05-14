const url = 'someUrl';

const ServerComponent = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <h1 className='text-7xl'>DrinksPage</h1>
    </div>
  );
};
export default ServerComponent;