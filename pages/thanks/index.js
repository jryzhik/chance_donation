import { useRouter } from 'next/router';
import Thanks from './thanks';

function Index({ id }) {
  return (
      <Thanks id = {id}/>
  );
}

Index.getInitialProps = async ({ query }) => {
  return { id: Number(query.id) };
};

export default Index;