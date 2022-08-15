import { memo } from 'react';
import AccountItems from './AccountItems';

function SearchAccountsList({ data }) {
    return data.map((data) => <AccountItems data={data} key={data.id} />);
}

export default memo(SearchAccountsList);
