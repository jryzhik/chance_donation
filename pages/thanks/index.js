import { useRouter } from 'next/router';
import BrainThanks from './brainThanks';

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