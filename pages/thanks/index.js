import BrainThanks from '../../src/components/brainThanks';

export const config = {
  runtime: 'edge',
}

function Thanks({ id }) {
  return (
      <BrainThanks id = {id}/>
  );
}

Thanks.getInitialProps = async ({ query }) => {
    const id = query.id ? Number(query.id) : 0;
    return { 
      id
    };
  };

export default Thanks;