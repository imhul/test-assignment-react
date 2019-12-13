// Core
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Statistic } from 'antd';

function Stats() {
    const dispatch = useDispatch();
    const { pathname } = useSelector(state => state.router.location);
    const { academies, error } = useSelector(state => state.mainReducer);
 
    if (!academies.length && !error.message && pathname === '/add') {
        dispatch({ type: 'GET_ACADEMIES' });
    }
    
    return (
        <Card className="Stats">
            <Statistic title="Added Academies" value={academies.length} precision={0} />
        </Card>
    )
}
  
export default Stats;