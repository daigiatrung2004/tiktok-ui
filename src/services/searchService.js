import * as request from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const result = await request.get('users/search', {
            params: {
                q,
                type
            }
        });
        return result.data;
    } catch {
        console.log('error');
    }
};
