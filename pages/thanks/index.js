import { useRouter } from 'next/router';
import BrainThanks from './brainThanks';

function Thanks({ id }) {
  return (
      <BrainThanks id = {id}/>
  );
}

Thanks.getInitialProps = async ({ query }) => {
  return { id: Number(query.id) };
};

export default Thanks;